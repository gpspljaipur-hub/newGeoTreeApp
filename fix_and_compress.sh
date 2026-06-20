#!/bin/bash
set -e

echo "Step 1: Fixing format-extension mismatch (converting JPEG-disguised PNGs to true PNGs)..."
find Src/assets/Images -type f -name "*.png" | while read -r file; do
  format=$(sips -g format "$file" | grep "format" | awk '{print $2}')
  if [ "$format" = "jpeg" ]; then
    echo "  Converting JPEG to PNG format: $file"
    sips -s format png "$file" --out "$file" >/dev/null
  fi
done

echo "Step 2: Compressing all image files > 1MB..."
find Src/assets/Images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r file; do
  size_bytes=$(stat -f%z "$file")
  ext="${file##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  
  if [ "$ext_lower" = "png" ]; then
    width=$(sips -g pixelWidth "$file" | grep "pixelWidth" | awk '{print $2}')
    target_w=$((width - 1))
    sips --resampleWidth "$target_w" "$file" >/dev/null
    size_bytes=$(stat -f%z "$file")
    
    while [ "$size_bytes" -gt 1048576 ] && [ "$target_w" -gt 100 ]; do
      target_w=$((target_w * 95 / 100))
      echo "  PNG $file still larger than 1MB ($((size_bytes / 1024)) KB). Downscaling width to ${target_w}px..."
      sips --resampleWidth "$target_w" "$file" >/dev/null
      size_bytes=$(stat -f%z "$file")
    done
  else
    # For JPEGs > 1MB, optimize quality/resolution
    if [ "$size_bytes" -gt 1048576 ]; then
      sips -s format jpeg -s formatOptions 80 "$file" --out "$file" >/dev/null
      size_bytes=$(stat -f%z "$file")
      width=$(sips -g pixelWidth "$file" | grep "pixelWidth" | awk '{print $2}')
      target_w="$width"
      while [ "$size_bytes" -gt 1048576 ] && [ "$target_w" -gt 100 ]; do
        target_w=$((target_w * 95 / 100))
        echo "  JPEG $file still larger than 1MB ($((size_bytes / 1024)) KB). Downscaling width to ${target_w}px..."
        sips --resampleWidth "$target_w" "$file" >/dev/null
        size_bytes=$(stat -f%z "$file")
      done
    fi
  fi
done

echo "Verification: Checking for any remaining files > 1MB..."
find Src/assets/Images -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -size +1M
echo "Finished!"

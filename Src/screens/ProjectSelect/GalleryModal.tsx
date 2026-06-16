import React, { useRef, useEffect } from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

interface GalleryModalProps {
  visible: boolean;
  onClose: () => void;
  images: any[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const { width: screenWidth } = Dimensions.get('window');

const GalleryModal: React.FC<GalleryModalProps> = ({
  visible,
  onClose,
  images,
  activeIndex,
  setActiveIndex,
}) => {
  const flatListRef = useRef<FlatList>(null);

  // Scroll to selected index when the modal opens or activeIndex changes
  useEffect(() => {
    if (visible && flatListRef.current) {
      const timer = setTimeout(() => {
        try {
          flatListRef.current?.scrollToIndex({ index: activeIndex, animated: false });
        } catch (error) {
          console.log('Error scrolling in GalleryModal useEffect:', error);
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [visible, activeIndex]);

  const handleThumbnailPress = (index: number) => {
    setActiveIndex(index);
    try {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    } catch (error) {
      console.log('Error scrolling to index:', error);
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <SafeAreaView style={styles.modalSafeArea} edges={['top', 'bottom']}>
          {/* Close Button and Counter */}
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.modalCounter}>
              {activeIndex + 1} / {images.length}
            </Text>
            <View style={{ width: 40 }} />
          </View>

          {/* Fullscreen Swipeable Images */}
          <FlatList
            ref={flatListRef}
            data={images}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            initialScrollIndex={activeIndex}
            getItemLayout={(data, index) => ({
              length: screenWidth,
              offset: screenWidth * index,
              index,
            })}
            onMomentumScrollEnd={(e) => {
              const index = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
              setActiveIndex(index);
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.modalImageWrapper, { width: screenWidth }]}>
                <Image
                  source={item}
                  style={styles.modalFullImage}
                  resizeMode="contain"
                />
              </View>
            )}
          />

          {/* Bottom Thumbnail strip */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.thumbnailScroll}
            contentContainerStyle={styles.thumbnailContainer}
          >
            {images.map((img: any, idx: number) => (
              <TouchableOpacity
                key={idx}
                activeOpacity={0.8}
                onPress={() => handleThumbnailPress(idx)}
              >
                <Image
                  source={img}
                  style={[
                    styles.thumbnailImage,
                    idx === activeIndex && styles.activeThumbnailImage,
                  ]}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default GalleryModal;

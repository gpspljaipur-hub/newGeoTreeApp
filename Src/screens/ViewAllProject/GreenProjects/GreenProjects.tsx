import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Images from '../../../constants/images';
import styles from './Styles';

const GreenProjects = ({ navigation }: any) => {

    const statsData = [
        { id: '1', value: '58+', label: 'Active Projects', icon: Images.plant_img },
        { id: '2', value: '2.8M+', label: 'Trees to be Planted', icon: Images.treeIcon },
        { id: '3', value: '85K+', label: 'Tons CO₂ Offset', icon: Images.co2Cloud || Images.co2Cloud }, // fallback if co2_cloud missing
        { id: '4', value: '24', label: 'States Covered', icon: Images.Location },
    ];

    const categories = [
        { id: '1', name: 'All Projects', icon: null },
        { id: '2', name: 'Restoration', icon: Images.plant_img },
        { id: '3', name: 'Urban Forest', icon: Images.treeIcon },
        { id: '4', name: 'Water & Ecosystem', icon: Images.drop },
        { id: '5', name: 'More ', icon: null },
    ];

    const projectsData = [
        {
            id: '1',
            tag: 'RESTORATION',
            image: Images.project_aravalli,
            title: 'Aravalli Restoration Project',
            location: 'Rajasthan',
            desc: 'Restoring degraded forest land and reviving native biodiversity in Aravalli ranges.',
            trees: '18,450 / 50,000',
            progress: 37,
            daysLeft: 65,
            ngo: 'Prakriti Foundation',
            badge: 'Featured',
            badgeIcon: Images.star,
        },
        {
            id: '2',
            tag: 'URBAN FOREST',
            image: Images.project_jaipur,
            title: 'Urban Forest Jaipur',
            location: 'Rajasthan',
            desc: 'Creating dense, native urban forests to improve air quality and reduce urban heat.',
            trees: '8,320 / 15,000',
            progress: 55,
            daysLeft: 40,
            ngo: 'Green Shiksha',
            badge: 'Popular',
            badgeIcon: Images.leaf || Images.star,
        },
        {
            id: '3',
            tag: 'WATER & ECOSYSTEM',
            image: Images.project_himalayas,
            title: 'River Bank Restoration',
            location: 'Uttarakhand',
            desc: 'Restoring river ecosystems by planting trees along riverbanks and preventing soil erosion.',
            trees: '12,750 / 30,000',
            progress: 42,
            daysLeft: 55,
            ngo: 'Jal Rakshak',
            badge: 'New',
            badgeIcon: Images.star,
        },
    ];

    const renderProjectCard = ({ item }: any) => (
        <View style={styles.projectCard}>
            <View style={styles.imageContainer}>
                <Image source={item.image} style={styles.projectImage} resizeMode="cover" />
                <View style={styles.tagBadge}>
                    <Text style={styles.tagText}>{item.tag}</Text>
                </View>
                <View style={styles.gpsBadge}>
                    <Image source={Images.Location} style={styles.gpsIcon} resizeMode="contain" />
                    <Text style={styles.gpsText}>GPS VERIFIED</Text>
                </View>
            </View>

            <View style={styles.projectInfo}>
                <View style={styles.projectHeaderRow}>
                    <View style={styles.titleLocationCol}>
                        <Text style={styles.projectTitle}>{item.title}</Text>
                        <View style={styles.locationRow}>
                            <Image source={Images.Location} style={styles.locationIcon} resizeMode="contain" />
                            <Text style={styles.locationText}>{item.location}</Text>
                        </View>
                    </View>
                    <View style={styles.statusBadge}>
                        <Image source={item.badgeIcon} style={styles.statusIcon} resizeMode="contain" />
                        <Text style={styles.statusText}>{item.badge}</Text>
                    </View>
                </View>

                <Text style={styles.projectDesc} numberOfLines={2}>{item.desc}</Text>

                <View style={styles.statsRow}>
                    <View style={styles.treesCol}>
                        <View style={styles.treesLabelRow}>
                            <Image source={Images.treeIcon} style={styles.treesIcon} resizeMode="contain" />
                            <Text style={styles.treesValue}>{item.trees}</Text>
                        </View>
                        <Text style={styles.treesLabel}>Trees Planted</Text>
                        <View style={styles.progressBarBg}>
                            <View style={[styles.progressBarFill, { width: `${item.progress}%` }]} />
                        </View>
                    </View>
                    <Text style={styles.progressText}>{item.progress}%</Text>
                    <View style={styles.verticalDivider} />
                    <View style={styles.daysCol}>
                        <Image source={Images.calendar} style={styles.daysIcon} resizeMode="contain" />
                        <View>
                            <Text style={styles.daysValue}>{item.daysLeft}</Text>
                            <Text style={styles.daysLabel}>Days Left</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.footerRow}>
                    <View style={styles.ngoInfo}>
                        <Image source={Images.group} style={styles.ngoIcon} resizeMode="contain" />
                        <View>
                            <Text style={styles.ngoName}>{item.ngo}</Text>
                            <Text style={styles.ngoLabel}>NGO Partner</Text>
                        </View>
                    </View>
                    <View style={styles.verifiedInfo}>
                        <Image source={Images.shield} style={styles.verifiedIcon} resizeMode="contain" />
                        <View>
                            <Text style={styles.verifiedValue}>100%</Text>
                            <Text style={styles.verifiedLabel}>Verified</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.viewDetailsBtn}>
                        <Text style={styles.viewDetailsText}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.safeArea}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Image source={Images.back} style={styles.backIcon} resizeMode="contain" />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.headerTitle}>All Green Projects</Text>
                    </View>
                    <Text style={styles.headerSubtitle}>Support verified environmental projects across India</Text>
                </View>
                <TouchableOpacity style={styles.filterButton}>
                    <Image source={Images.filter} style={styles.filterIcon} resizeMode="contain" />
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* Stats Banner */}
                <View style={styles.statsBanner}>
                    {statsData.map((stat, index) => (
                        <React.Fragment key={stat.id}>
                            <View style={styles.statItem}>
                                <View style={styles.statIconCircle}>
                                    <Image source={stat.icon} style={styles.statIcon} resizeMode="contain" />
                                </View>
                                <View style={styles.statTextCol}>
                                    <Text style={styles.statValue}>{stat.value}</Text>
                                    <Text style={styles.statLabel}>{stat.label}</Text>
                                </View>
                            </View>
                            {index < statsData.length - 1 && <View style={styles.statDivider} />}
                        </React.Fragment>
                    ))}
                </View>

                {/* Categories */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesScroll}>
                    {categories.map((cat, index) => (
                        <TouchableOpacity
                            key={cat.id}
                            style={[styles.categoryChip, index === 0 && styles.categoryChipActive]}
                        >
                            {/* {cat.icon && <Image source={cat.icon} style={[styles.categoryIcon, index === 0 && { tintColor: '#fff' }]} resizeMode="contain" />} */}
                            <Text style={[styles.categoryText, index === 0 && styles.categoryTextActive]}>{cat.name}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Projects List */}
                <FlatList
                    data={projectsData}
                    keyExtractor={item => item.id}
                    renderItem={renderProjectCard}
                    scrollEnabled={false}
                    contentContainerStyle={styles.projectListContent}
                />


            </ScrollView>

            {/* Bottom Bar */}
            <View style={styles.bottomBarContainer}>
                <View style={styles.bottomBarLeft}>
                    <View style={styles.bottomBarIconCircle}>
                        <Image source={Images.leaf} style={styles.bottomBarIcon} resizeMode="contain" />
                    </View>
                    <View style={styles.bottomBarTextCol}>
                        <Text style={styles.bottomBarTitle}>Every contribution helps heal our planet.</Text>
                        <Text style={styles.bottomBarSub}>Transparent. Verified. Impactful.</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.howItWorksBtn}>
                    <Text style={styles.howItWorksText}>How It Works</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default GreenProjects;

import * as React from 'react'
import {useState, useRef} from 'react'
import {ImageBackground, Text, View, ScrollView, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Images} from '../../../assets'
import {styles} from '../class-learning/class-learning.style'
import { List } from 'react-native-paper'
import Video from 'react-native-video'
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const ClassLearning = (props) => {
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  const videoPlayer = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const [screenType, setScreenType] = useState('content');

  const onSeek = (seek) => {
    //Handler for change in seekbar
    videoPlayer.current.seek(seek);
  };

  const onPaused = (playerState) => {
    //Handler for Video Pause
    setPaused(!paused);
    setPlayerState(playerState);
  };

  const onReplay = () => {
    //Handler for Replay
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
    // Video Player will progress continue even if it ends
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime);
    }
  };

  const onLoad = (data) => {
    setDuration(data.duration);
    setIsLoading(false);
  };

  const onLoadStart = (data) => setIsLoading(true);

  const onEnd = () => setPlayerState(PLAYER_STATES.ENDED);

  const onError = () => alert('Oh! ', error);

  const exitFullScreen = () => {
    alert('Exit full screen');
  };

  const enterFullScreen = () => {};

  const onFullScreen = () => {
    setIsFullScreen(isFullScreen);
    if (screenType == 'content') setScreenType('cover');
    else setScreenType('content');
  };

  const renderToolbar = () => (
    <View>
      <Text style={styles.toolbar}> toolbar </Text>
    </View>
  );

  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(4);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? Images.BintangFull
                    : Images.BintangBorder
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const onSeeking = (currentTime) => setCurrentTime(currentTime);
    return (
        <>
         <View style={styles.containerHeader}>
            <TouchableOpacity>
              <Images.ButtonBack.default style={styles.containerButtonFilter}/>
            </TouchableOpacity>
          </View>
        <View style={styles.container}>
            <Video
              onEnd={onEnd}
              onLoad={onLoad}
              onLoadStart={onLoadStart}
              onProgress={onProgress}
              paused={paused}
              ref={videoPlayer}
              resizeMode={'screenType'}
              onFullScreen={isFullScreen}
              source={{
                uri:
                  'http://belajariah.com/assets/BELAJARIAH%20-%20Solusi%20Tepat%20Belajar%20Membaca%20Al-Quran%20dengan%20Mudah,%20Kapan%20dan%20Dimana%20Saja%20!!.mp4',
              }}
              repeat
              style={styles.mediaPlayer}
              volume={10}
            />
            <MediaControls
              duration={duration}
              isLoading={isLoading}
              mainColor="#333"
              onFullScreen={onFullScreen}
              onPaused={onPaused}
              onReplay={onReplay}
              onSeek={onSeek}
              onSeeking={onSeeking}
              playerState={playerState}
              progress={currentTime}
              toolbar={renderToolbar()}
            />
        </View>
        <View style={styles.containerView}>
            <ScrollView>
                <View style={styles.containerParentKelas}>
                    <View style={styles.containerMenuDeskripsiKelas}>
                      <Text style={styles.containerTextJudulUlasanKelas}>Belajar Al-Qur'an dari dasar dengan metode yang mudah dan menyenangkan</Text>
                      <Text style={styles.containerTextUlasanKelas}>#Populer Kelas</Text>
                      <View style={styles.containerParentReviw}>
                        <View style={styles.containerReviewUser}>
                          <Images.IconUserReview.default/>
                          <Text style={styles.textRating}>1.5K</Text>
                        </View>
                        <View style={styles.containerReviewUser}>
                          <CustomRatingBar />
                          <Text style={styles.textStyle}>
                            {/*To show the rating selected*/}
                            {defaultRating} / {Math.max.apply(null, maxRating)}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.containerTextUlasanKelas}>Belajar Tahsin dengan ustadz dan ustadzah lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>
                      <TouchableOpacity>
                        <View style={styles.containerConsul}>
                          <Images.IconConsultations.default/>
                          <Text style={styles.textConsul}>Fitur konsultasi bacaan</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.containerMenuDetail}>
                      <Text style={styles.containerTitleKelas}>Konten Kelas</Text>
                      <List.Section>
                        <List.Accordion
                          title="Pre Exam" style={styles.containerTextHeaderDetail}>
                          <List.Item left={props => <List.Icon {...props} icon="video" />} title="First item" style={styles.containerTextDetail}/>
                          <List.Item left={props => <List.Icon {...props} icon="text" />}title="Second item" style={styles.containerTextDetail}/>
                        </List.Accordion>
                        <List.Accordion
                          title="Huruf Hijaiyah, Makhraj, dan Shifathul huruf" style={styles.containerTextHeaderDetail}>
                          <List.Item left={props => <List.Icon {...props} icon="video" />} title="First item" style={styles.containerTextDetail}/>
                          <List.Item left={props => <List.Icon {...props} icon="text" />}title="Second item" style={styles.containerTextDetail}/>
                        </List.Accordion>
                        <List.Accordion
                          title="Harokat" style={styles.containerTextHeaderDetail}>
                          <List.Item left={props => <List.Icon {...props} icon="video" />} title="Dasar Harokat" style={styles.containerTextDetail}/>
                          <List.Item left={props => <List.Icon {...props} icon="text" />} title="Dasar Harokat" style={styles.containerTextDetail}/>
                        </List.Accordion>
                        <List.Accordion
                          title="Tajwid" style={styles.containerTextHeaderDetail}>
                          <List.Item left={props => <List.Icon {...props} icon="video" />} title="First item" style={styles.containerTextDetail}/>
                          <List.Item left={props => <List.Icon {...props} icon="text" />}title="Second item" style={styles.containerTextDetail}/>
                        </List.Accordion>
                        <List.Accordion
                          title="Mad" style={styles.containerTextHeaderDetail}>
                          <List.Item left={props => <List.Icon {...props} icon="video" />} title="First item" style={styles.containerTextDetail}/>
                          <List.Item left={props => <List.Icon {...props} icon="text" />}title="Second item" style={styles.containerTextDetail}/>
                        </List.Accordion>
                        <List.Accordion
                          title="Tahsinul Qur'an" style={styles.containerTextHeaderDetail}>
                          <List.Item left={props => <List.Icon {...props} icon="video" />} title="First item" style={styles.containerTextDetail}/>
                          <List.Item left={props => <List.Icon {...props} icon="text" />}title="Second item" style={styles.containerTextDetail}/>
                        </List.Accordion>
                        <List.Accordion
                          title="Exam" style={styles.containerTextHeaderDetail}>
                          <List.Item left={props => <List.Icon {...props} icon="video" />} title="First item" style={styles.containerTextDetail}/>
                          <List.Item left={props => <List.Icon {...props} icon="text" />}title="Second item" style={styles.containerTextDetail}/>
                        </List.Accordion>
                      </List.Section>
                    </View>
                </View>
            </ScrollView>
        </View>
        </>
    )
}

export default ClassLearning
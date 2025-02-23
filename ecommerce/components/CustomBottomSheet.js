import React, { forwardRef, useRef, useMemo, useCallback } from 'react';
import {
  View,
  Keyboard,
  Dimensions,
  StyleSheet,
  TextInput,
  Alert,
  useWindowDimensions,
  Platform,
} from 'react-native';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';

import {
  BottomSheetModal,
  BottomSheetModalProvider,
  useBottomSheetInternal,
  BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler'


const TDActionSheet = forwardRef(
  (
    {
      children,

      closeSheet,
      color = '#fff',
      px = 16,
      mb = 0,
      snapPoints,
    },
    ref,
  ) => {
    const bottomSheetRef = useRef(null); 
    const SCREEN_WIDTH = useWindowDimensions();
    const handleOpen = useCallback(() => {
     

      bottomSheetRef.current?.present();
    }, []);

    const handleClose = useCallback(() => {
    
      bottomSheetRef.current?.dismiss();
      if (closeSheet) {
        closeSheet();
      }
    }, [closeSheet]);

    React.useImperativeHandle(ref, () => ({
      open: handleOpen,
      close: handleClose,
    }));
   
   
    return (
      
      <BottomSheetModalProvider>
        
        <BottomSheetModal
           
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              opacity={0.5}
              disappearsOnIndex={-1}
              appearsOnIndex={0}
            />
          )}
          ref={bottomSheetRef}
          snapPoints={snapPoints || ['65%']}
          enablePanDownToClose
          onClose={handleClose}
          index={0}
          style={{
            marginBottom: 72,
            borderRadius: 20,
          }}
          backgroundStyle={{ backgroundColor: color }}>
          <BottomSheetScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}>
            <View
              style={[
                styles.contentContainer,
                { paddingHorizontal: px, marginBottom: mb }
              ]}>
              {children}
            </View>
          </BottomSheetScrollView>
        </BottomSheetModal>
       
    </BottomSheetModalProvider> 
   

    );
  },
);

const styles = StyleSheet.create({
  sheetContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 20, // Add padding to avoid content being hidden behind the keyboard
  },
});

export default TDActionSheet;

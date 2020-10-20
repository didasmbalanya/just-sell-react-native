import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Button, Image, View } from "react-native";

import { Screen } from "./app/components/Screen";
import colors from "./app/config/colors";
import { Icon } from "./app/components/Icon";
import { ImageContainer } from "./app/components/ImageContainer";
import { FlatList } from "react-native-gesture-handler";
import { ImageInput } from "./app/components/ImageInput";
import { ImageInputList } from "./app/components/ImageInputList";

// export default () => {
//   const [imageUri, setImageUri] = useState();
//   const [images, setImages] = useState([]);
//   const requestPermission = async () => {
//     const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
//     if (!granted) {
//       alert("You need permission enable to access the library");
//     }
//   };
//   useEffect(() => {
//     requestPermission();
//   }, []);

//   const selectImage = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync();
//       if (!result.cancelled) {
//         const newImages = [...images, { uri: result.uri }];
//         setImages(newImages);
//       }
//     } catch (error) {}
//   };
//   return (
//     <Screen>
//       <ImageContainer onPress={selectImage}>
//         <Icon
//           name="camera"
//           backgroundColor="transparent"
//           size={120}
//           iconColor={colors.mediumGray}
//         />
//       </ImageContainer>
//       {images.length ? (
//         <FlatList
//           numColumns={2}
//           data={images}
//           keyExtractor={(image) => image.uri}
//           renderItem={({ item: { uri } }) => {
//             {
//               console.log("image ========== \n", uri);
//             }
//             return (
//               <ImageContainer>
//                 <Image
//                   source={{ uri }}
//                   style={{ width: "100%", height: "100%" }}
//                 />
//               </ImageContainer>
//             );
//           }}
//         />
//       ) : null}
//     </Screen>
//   );
// };

export default () => {
  const [imageUris, setImageUris] = useState([]);

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };

  return (
    <Screen>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
};

import { StyleSheet, css } from "aphrodite";
import { Image, Text } from "@mantine/core";

/**
 * @description
 * This component responsible for holding all images to be dragged.
 * checkout Public folding for ImagePalletAssets for images
 */

export default function ImagePallet() {

    /**
     * setting image source to dataTransfer object to receive it
     * in target's drop events
     */
    const handleDragStart = (event, src) => {
        event.dataTransfer.setData('text/plain', `${src.toString()}:1` );
    };

    const imageCount = 20;
    const imageNames = Array.from({ length: imageCount }, (_, index) => `image-${index + 1}.jpg`);
    return (
        <div className={css(styles.palletContainer)}>
            <Text fw={"bold"} c={"black"} >Image Pallet</Text>
            {imageNames.map((fileName, index) => (
                <Image
                    className={css(styles.imageStyles)}
                    key={index}
                    src={`../imagePalletAssets/${fileName}`}
                    draggable
                    onDragStart={(e) => handleDragStart(e, `../imagePalletAssets/${fileName}`)}/>
            ))}
        </div>
    )
}

const styles = StyleSheet.create({
    palletContainer: {
        display: "flex",
        width: "200px",
        flexDirection: "column",
        alignItems:"center",
        padding:"4px"
    },
    imageStyles: {
        padding:"4px"
    }
})
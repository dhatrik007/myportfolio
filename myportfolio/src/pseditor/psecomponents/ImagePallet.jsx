import { StyleSheet, css } from "aphrodite";
import { Image } from "@mantine/core";

export default function ImagePallet() {
    const handleDragStart = (event, src) => {
        event.dataTransfer.setData('text/plain', src.toString() );
    };
    const imageNames = Array.from({ length: 20 }, (_, index) => `image-${index + 1}.jpg`);
    return (
        <div className={css(styles.palletContainer)}>
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
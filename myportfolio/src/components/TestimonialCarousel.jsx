import React from "react"
import { StyleSheet, css } from "aphrodite";
import { Carousel } from '@mantine/carousel';
import { Text } from "@mantine/core";


export default function TestimonialCarousel() {
    const personData = [
        {
            "name": "Isha Pathak",
            "role": "Staff Software Engineer",
            "testimony": "I worked with Nikhil on the same team for the past year. He is a great engineer with a strong ownership mindset and good product-sense. He’s super productive, he independently implemented multiple UI workflows for a large product launch in a short time. I was impressed by the care he showed for launching with a well tested product with good UX. I think any team would be lucky to have Nikhil as an engineer."
        },
        {
            "name": "Angus Fan",
            "role": "Product Leader",
            "testimony": "I worked directly with Nikhil Kumar Dhatrik at Flexport and wholeheartedly recommend him to any company looking for a fantastic software engineer who brings energy, dedication, and a customer-first mindset to everything he does. He played an important role in a large product launching under tight timelines and it would not have been possible without his great work. Thank you, Nikhil!"
        },
        {
            "name": "Levi Meahan",
            "role": "Engineering Manager",
            "testimony": "Nikhil is a fantastic engineer who showcased exceptional ownership, productivity, and skill with front-end development in his time at Flexport. He took over the ownership of the entire UI workstream for our new tracking product halfway through when the previous engineer leading it left. After taking this over, he completed work ahead of schedule, helped another engineer ramp up on the project, thoroughly tested it, fixed all the high priority bugs and implemented dozens of last-minute design changes ahead of release."
        }
    ]
    const slides = personData.map((item) => (
        <Carousel.Slide key={item.name}>
        <div  className={css(styles.textContainer)}>
            <div className={css(styles.textAreaContainer)}>
                <Text size="md" fs={"italic"} c="white" ff="europa, sans-serif">{`"${item.testimony}"`}</Text>
                <Text size="lg" c="white" ff="europa, sans-serif">{`- ${item.name}, ${item.role}`}</Text>
            </div>
        </div>
        </Carousel.Slide>
    ))

    return (
        <div className={css(styles.mainContainer)}>
        <Carousel loop withIndicators height={250} controlSize={40} slideGap="xl" controlsOffset="xl"  >
            {slides}
        </Carousel>
        </div>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    textAreaContainer: {
        display: "flex",
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection:"column"
    },
    mainContainer: {
        display: "flex",
        width: "70%"
    }
})

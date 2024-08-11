import {useState} from "react";
import {CarouselMenu} from "../../4-location/components/CarouselMenu.component";

export const CarouselComponent = ({carouselItems}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slideTitles = carouselItems.map(item => {
        return item.title
    });

    const slideIcons = carouselItems.map(item => {
        return item.icon
    });

    const slideSrc = carouselItems.map(item => {
        return item.src
    });

    const handleSlideChange = (idx) => {
        setActiveIndex(idx);
    }

    return (
        <div>
            <CarouselContainer>
                {slideSrc.map((Item, index) => (
                    <CarouselSlide
                        key={`${index}_cc`}
                        $isActive={activeIndex === index}
                    >
                        <ImgContainer>
                            <Item/>
                        </ImgContainer>
                    </CarouselSlide>
                ))}
            </CarouselContainer>
            <CarouselMenu
                icons={slideIcons}
                titles={slideTitles}
                setActiveIndex={handleSlideChange}
            />
        </div>
    );
}
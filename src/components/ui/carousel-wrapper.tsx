import { Card, CardContent } from '@/components/ui/card';
import { Raleway } from 'next/font/google';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import contents from '@/constants/programs-carousel';

const raleway = Raleway({ weight: '100', subsets: ['latin'] });
export default function CarouselDemo() {
  return (
    <Carousel id="programs" className="mb-10 mt-20 h-screen w-full">
      <CarouselContent className="h-screen w-full">
        {contents.map((content, i) => (
          <CarouselItem key={i} className="h-screen w-full">
            <Card className="h-screen w-full">
              <CardContent
                style={{
                  borderRadius: '10px',
                  display: 'flex',
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/images/programs/image-${i + 1}.jpg)`,
                  backgroundPosition: 'center top',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  width: '100%',
                  height: '100%',
                }}
              >
                <div className="flex flex-col items-center">
                  <h1 className={`text-5xl font-extrabold uppercase max-md:text-2xl ${raleway.className}`}>{content.title}</h1>
                  <p className="bold text-lg">{content?.subtitle}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

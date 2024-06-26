import Wrapper from '@/components/layouts/Wrapper';
import Hero from '@/components/ui/hero';
import Departments from '@/components/ui/departments';
import Carousel from '@/components/ui/carousel-wrapper';

export default async function Home() {
  return (
    <Wrapper>
      <Hero />
      <Departments />
      <Carousel />
    </Wrapper>
  );
}

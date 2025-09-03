import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { Cpu, Rocket, Wrench } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">About Gamers4Gamers</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We are more than just a company; we are a team of enthusiasts, gamers, and creators dedicated to pushing the
          limits of performance.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">Our Mission & Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our mission is to empower individuals by providing them with the most powerful and reliable custom PC
            solutions on the market. We believe that with the right tools, anyone can achieve greatness, whether it's
            on the digital battlefield, in a complex 3D render, or during a flawless live stream.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our vision is to be the most trusted name in high-performance computing, known for our unparalleled
            craftsmanship, cutting-edge technology, and unwavering commitment to our customers. We don't just sell
            computers; we build partnerships.
          </p>
        </div>
        <div>
          <Image
            src="https://picsum.photos/800/600"
            width={800}
            height={600}
            alt="Company Workshop"
            data-ai-hint="computer workshop"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">What We Do Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg text-center">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Specialized PC Solutions</h3>
            <p className="text-muted-foreground">
              Custom-built systems tailored for elite gaming, professional content creation, and scientific computing.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <Cpu className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Components</h3>
            <p className="text-muted-foreground">
              We source and use only the highest quality parts from leading brands to ensure stability and performance.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Technical Services</h3>
            <p className="text-muted-foreground">
              Lifetime support from the experts who built your machine, from troubleshooting to future upgrades.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-card p-6 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary">
                <AvatarImage src={member.image} alt={member.name} data-ai-hint="portrait professional" />
                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-muted-foreground">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

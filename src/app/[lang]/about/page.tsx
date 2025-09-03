
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { teamMembers } from '@/lib/data';
import { Cpu, Rocket, Wrench } from 'lucide-react';
import Image from 'next/image';
import { getDictionary } from '@/lib/dictionaries';

export default async function AboutPage({ params: { lang } }: { params: { lang: string } }) {
  const dict = await getDictionary(lang);
  const aboutDict = dict.about_page;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{aboutDict.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {aboutDict.description}
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">{aboutDict.mission_vision}</h2>
          <p className="text-muted-foreground leading-relaxed">
            {aboutDict.mission_text}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {aboutDict.vision_text}
          </p>
        </div>
        <div>
          <Image
            src="https://picsum.photos/800/600"
            width={800}
            height={600}
            alt="Gamers4Gamers Team Workshop"
            data-ai-hint="computer workshop"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">{aboutDict.what_we_do_best}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg text-center">
            <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{aboutDict.specialized_solutions}</h3>
            <p className="text-muted-foreground">
              {aboutDict.specialized_solutions_desc}
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <Cpu className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{aboutDict.premium_components}</h3>
            <p className="text-muted-foreground">
              {aboutDict.premium_components_desc}
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg text-center">
            <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{aboutDict.expert_services}</h3>
            <p className="text-muted-foreground">
              {aboutDict.expert_services_desc}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">{aboutDict.meet_the_team}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-card p-6 rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
              <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary">
                <AvatarImage src={member.image} alt={`Portrait of ${member.name}, ${member.role}`} data-ai-hint="portrait professional" />
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

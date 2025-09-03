"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getDictionary } from "@/lib/dictionaries";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage({ params: { lang } }: { params: { lang: string } }) {
  const { toast } = useToast();
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    const fetchDict = async () => {
      const d = await getDictionary(lang);
      setDict(d.contact_page);
    };
    fetchDict();
  }, [lang]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: dict.toast_title,
      description: dict.toast_description,
    });
    form.reset();
  }

  if (!dict) {
    return null; // or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">{dict.title}</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {dict.description}
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-card p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">{dict.send_message}</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dict.full_name}</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dict.email}</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dict.subject}</FormLabel>
                    <FormControl>
                      <Input placeholder="Custom Build Inquiry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{dict.message}</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us how we can help..." className="min-h-[120px]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">{dict.submit}</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold mb-4">{dict.contact_information}</h2>
                <div className="space-y-4 text-muted-foreground">
                    <div className="flex items-center gap-4">
                        <MapPin className="w-6 h-6 text-primary"/>
                        <span>{dict.address}</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-primary"/>
                        <span>contact@gamers4gamers.com</span>
                    </div>
                     <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-primary"/>
                        <span>{dict.phone}</span>
                    </div>
                </div>
            </div>
             <div>
                <h2 className="text-2xl font-bold mb-4">{dict.follow_us}</h2>
                 <div className="flex space-x-4">
                    <Link href="#" aria-label="Twitter"><Twitter className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" /></Link>
                    <Link href="#" aria-label="Facebook"><Facebook className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" /></Link>
                    <Link href="#" aria-label="Instagram"><Instagram className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" /></Link>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-4">{dict.our_location}</h2>
                <div className="aspect-video w-full bg-card rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">{dict.map_placeholder}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

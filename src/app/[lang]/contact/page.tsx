
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { useDictionary } from "@/hooks/use-dictionary";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.05 2.9A15.9 15.9 0 0 1 21.1 10m-7.05-7.1A15.9 15.9 0 0 0 2.9 10" />
    </svg>
);

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const dict = useDictionary()?.contact_page;
  const { toast } = useToast();

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
                      <Input placeholder={dict.placeholder_name} {...field} />
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
                    <FormLabel>{dict.email_label}</FormLabel>
                    <FormControl>
                      <Input placeholder={dict.placeholder_email} {...field} />
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
                      <Input placeholder={dict.placeholder_subject} {...field} />
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
                      <Textarea placeholder={dict.placeholder_message} className="min-h-[120px]" {...field} />
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
                        <span>{dict.email}</span>
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
                    <Link href="https://wa.me/573218331005" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" /></Link>
                    <Link href="http://facebook.com/GamersForGamersStore" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><Facebook className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" /></Link>
                    <Link href="https://www.instagram.com/gamers4gamersstore" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Instagram className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" /></Link>
                    <Link href="https://www.youtube.com/@gamers4gamers" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><Youtube className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" /></Link>
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

    
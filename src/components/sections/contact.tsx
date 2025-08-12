"use client";
import React, { useState } from "react";
import {
  Form,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function ContactSection(): React.ReactElement {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact</h2>
      <div className="mt-6 max-w-xl">
        <p className="text-foreground/80">
          Prefer email? Reach me at{" "}
          <a
            href="mailto:ahmedamrahmed73@gmail.com"
            className="underline underline-offset-4 hover:text-foreground"
          >
            ahmedamrahmed73@gmail.com
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm(): React.ReactElement {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed to send");
      toast.success("Sent successfully");
      form.reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form className="mt-6" onSubmit={onSubmit}>
      <FormField>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input id="name" name="name" placeholder="Your name" required />
      </FormField>
      <FormField>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <FormDescription>We’ll never share your email.</FormDescription>
      </FormField>
      <FormField>
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="How can I help?"
          required
        />
        <FormMessage></FormMessage>
      </FormField>
      <Button type="submit" className="mt-2" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send"}
      </Button>
    </Form>
  );
}

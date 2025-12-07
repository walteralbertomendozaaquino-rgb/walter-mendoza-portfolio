"use client";

import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="py-12 border-t border-muted-foreground/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <p className="font-semibold text-foreground">Walter Alberto Mendoza Aquino</p>
                    <p className="text-sm text-muted-foreground mt-1">Senior Fullstack Engineer & AI Architect</p>
                </div>

                <div className="flex flex-col gap-2 text-sm text-muted-foreground text-center md:text-right">
                    <a href="mailto:waltermendozaaquino@gmail.com" className="hover:text-accent transition-colors flex items-center gap-2 justify-center md:justify-end">
                        <Mail className="w-4 h-4" />
                        waltermendozaaquino@gmail.com
                    </a>
                    <p className="flex items-center gap-2 justify-center md:justify-end">
                        <MapPin className="w-4 h-4" />
                        Pulpí (Almería), España <span className="text-accent text-xs bg-accent/10 px-2 py-0.5 rounded-full ml-1">Remote</span>
                    </p>
                </div>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/walteralbertomendozaaquino-rgb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted/10 hover:bg-accent/10 hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-muted/10 hover:bg-accent/10 hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="text-center mt-12 text-xs text-muted-foreground/50">
                © {currentYear} All Rights Reserved. Not just code, but impact.
            </div>
        </footer>
    );
}

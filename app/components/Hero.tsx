"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pt-20">
            <div className="space-y-2 mb-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-accent font-medium tracking-wide"
                >
                    WALTER ALBERTO MENDOZA AQUINO
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[1.1]"
                >
                    Senior Fullstack Engineer <br />
                    <span className="text-muted-foreground">& AI Solutions Architect</span>
                </motion.h1>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-12"
            >
                <span className="text-foreground">10+ años</span> construyendo sistemas financieros críticos.
                Ahora diseñando la próxima generación de <span className="text-accent">Agentes de IA</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link
                    href="#project"
                    className="group inline-flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 text-base font-semibold rounded-full transition-all hover:bg-accent hover:text-white"
                >
                    Ver Proyecto
                    <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Link>

                <a
                    href="mailto:waltermendozaaquino@gmail.com"
                    className="group inline-flex items-center justify-center gap-2 border border-muted-foreground/20 bg-muted/10 backdrop-blur-sm px-8 py-4 text-base font-medium rounded-full text-foreground hover:bg-muted/20 hover:border-accent/50 transition-all"
                >
                    Contacto
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
            </motion.div>
        </section>
    );
}

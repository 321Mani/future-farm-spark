import { motion } from "framer-motion";
import { Target, Compass, BadgeCheck } from "lucide-react";
import aboutImg from "@/assets/images/building.jpg";
// import aboutImg from "@/assets/about-campus.jpg";

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-glow">
              <img
                src={aboutImg}
                alt="Imayam Institute campus architecture"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-[700px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-soft max-w-[220px] hidden sm:block">
              <BadgeCheck className="h-6 w-6 text-primary" />
              <div className="mt-2 font-display font-bold text-foreground">TNAU Affiliated</div>
              <div className="text-xs text-muted-foreground mt-1">
                Tamil Nadu Agricultural University recognised programmes
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-sm font-semibold text-primary tracking-widest uppercase">
              About the IIAT
            </div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl font-bold leading-tight">
              Imayam Institute of {" "}
              <span className="text-gradient">Agriculture</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Imayam Institute of Agriculture and Technology (IIAT) was affiliated to TamilNadu Agricultural University (TNAU) which is a premier and pioneer institute in agricultural education, research and extension. The university is well known for regional, national and International levels for the development of large number of improved varieties of food crops, horticultural crops and agricultural implements.
              <br /><br />
              Thus, IIAT is the fifth private self-financing agricultural college affiliated to TNAU. Initially, IIAThas started B.Sc. (Agriculture) programme (2013) with intake of 54 students and currently offering B.Sc. (Hons) Agriculture intake with 166 student’s.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <Target className="h-6 w-6 text-primary" />
                <div className="mt-3 font-display font-bold text-lg">Our Vision</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  The vision as envisaged by the Founders of IIAT, Thuraiyur is to develop this institute as a national centre of global focus with a reputation of academic excellence in agricultural education and research that catalyses knowledge and technology based agricultural growth and development in the State.
                </p>
              </div>
              <div className="rounded-2xl border bg-card p-6 shadow-soft">
                <Compass className="h-6 w-6 text-primary" />
                <div className="mt-3 font-display font-bold text-lg">Our Mission</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  IIAT, Thuraiyur is dedicated to impart quality education in agricultural science that inculcates expertise and talent for the development of the individual student. Agricultural education is the key to the prosperity of this region and the nation as a whole. The transformation that happens through the quality of agricultural education. shall lead to overall well being of the society.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

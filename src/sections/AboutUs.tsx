import Section from "@/components/Section";

export default function AboutUs() {
   return (
      <Section className="pt-40">
         <h1 className="text-center md:text-left text-4xl font-semibold mb-7">
            Tentang Kami
         </h1>
         <p className="text-3xl md:text-5xl mb-10 !leading-relaxed">
            PT. Purinusa Jayakusuma telah membangun lebih dari 1000 rumah
            premium di Tangerang <span className="font-bold">sejak 1985.</span>
         </p>
         <p className="text-xl leading-10">
            Kami menawarkan 12 komunitas perumahan yang unik, terletak di tiga
            kota yang diminati, dengan pilihan hunian premium siap huni sesuai
            gaya hidup Anda. Kami berkomitmen untuk memberikan kualitas terbaik
            dan nilai luar biasa kepada klien kami. Dengan pengalaman kami dan
            pilihan pembiayaan yang fleksibel, kami memberikan pengalaman tanpa
            masalah dalam pembelian rumah impian Anda. Pilih PT. Purinusa
            Jayakusuma untuk rumah premium berkualitas yang dapat Anda percayai.
         </p>
      </Section>
   );
}

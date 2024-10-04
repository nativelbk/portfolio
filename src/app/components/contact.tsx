import Form from "./form";
import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <main id="test1" className="relative bg-[url('/img3.svg')] min-h-[400px] bg-no-repeat bg-left "  >
      <Element name="contact" id="cont" className="font-semibold text-white flex justify-center text-2xl " >
        CONTACT
      </Element>
      <section className="font-thin leading-8 text-md mt-14 text-whiteText min-w-[150px] flex  max-md:justify-center max-md:items-center max-md:gap-8 relative items-center  justify-end flex-col " >
        <p className="max-[576px]:max-w-[300px]" >N&apos;hesitez à me contacter je répondrai dans les plus bref délais</p>
        <Form />

      </section>
    </main>
  )
}
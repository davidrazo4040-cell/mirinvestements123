import type { Metadata } from "next"
import { LegalPage, Pending, CONTACT_EMAIL, CONTACT_PHONE } from "@/components/legal-page"

export const metadata: Metadata = {
  title: "Aviso de Privacidad | MIR Investments",
  description: "Aviso de privacidad integral de MIR Investments.",
  alternates: { canonical: "/privacidad" },
}

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Aviso de Privacidad Integral"
      current="/privacidad"
      intro={
        <p>
          En MIR Investments tratamos tus datos personales con confidencialidad y únicamente para los
          fines que aquí se describen, en cumplimiento de la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares y demás disposiciones aplicables.
        </p>
      }
    >
      <h2>1. Identidad y domicilio del responsable</h2>
      <p>
        El responsable del tratamiento de tus datos personales es <Pending>[RAZÓN SOCIAL]</Pending>,
        que opera bajo el nombre comercial <strong>MIR Investments</strong> (en lo sucesivo, “MIR
        Investments” o el “Responsable”), con domicilio en <Pending>[DOMICILIO COMPLETO]</Pending>,
        Ciudad de México, México.
      </p>
      <p>
        Para cualquier asunto relacionado con este Aviso o con el tratamiento de tus datos, puedes
        contactarnos en <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> o al teléfono{" "}
        {CONTACT_PHONE}.
      </p>

      <h2>2. Datos personales que recabamos</h2>
      <p>
        Recabamos datos personales de forma directa, cuando tú nos los proporcionas a través de los
        formularios de este sitio web (el “Sitio”) o por correo electrónico, teléfono o WhatsApp:
      </p>
      <h3>Formulario de contacto</h3>
      <ul>
        <li>Nombre completo.</li>
        <li>Correo electrónico.</li>
        <li>Número telefónico.</li>
        <li>Rango de inversión de tu interés.</li>
        <li>El mensaje que, en su caso, decidas escribirnos.</li>
      </ul>
      <h3>Suscripción al newsletter</h3>
      <ul>
        <li>Correo electrónico.</li>
      </ul>
      <p>
        <strong>No recabamos datos personales sensibles</strong> a través del Sitio. Te pedimos no
        incluir este tipo de información en el campo de mensaje.
      </p>
      <p>
        Si decides avanzar en un proceso de inversión, la documentación adicional que se requiera
        (incluida la necesaria para tu identificación y para el proceso de diagnóstico y conocimiento
        del inversionista) se te solicitará por separado, y se te informará en ese momento sobre su
        tratamiento.
      </p>

      <h2>3. Finalidades del tratamiento</h2>
      <h3>Finalidades primarias (necesarias)</h3>
      <ol>
        <li>Atender tu solicitud de información y ponernos en contacto contigo.</li>
        <li>
          Proporcionarte información sobre las oportunidades de inversión de MIR Investments que
          correspondan al rango de inversión que nos indicaste.
        </li>
        <li>Dar seguimiento a la relación que, en su caso, se establezca contigo.</li>
      </ol>
      <h3>Finalidades secundarias (no necesarias)</h3>
      <ol>
        <li>
          Enviarte nuestro newsletter con información de mercado y nuevas oportunidades de inversión.
        </li>
        <li>Elaborar estadísticas internas sobre el interés en nuestras oportunidades.</li>
      </ol>
      <p>
        Si no deseas que tus datos se traten para las finalidades secundarias, puedes manifestarlo en
        cualquier momento escribiendo a <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Tu
        negativa no será motivo para negarte la atención que solicitaste.
      </p>

      <h2>4. Encargados y transferencias</h2>
      <p>
        Para operar el Sitio y gestionar tus solicitudes utilizamos proveedores de servicios
        tecnológicos que tratan tus datos únicamente por cuenta y bajo instrucciones de MIR
        Investments (encargados), entre ellos servicios de alojamiento web y de hojas de cálculo en la
        nube en los que se registran las solicitudes recibidas. Estos proveedores pueden almacenar la
        información en servidores ubicados fuera de México, incluidos los Estados Unidos de América.
      </p>
      <p>
        MIR Investments <strong>no vende ni comparte</strong> tus datos personales con terceros para
        fines propios de éstos. Únicamente realizaremos transferencias de datos en los casos
        permitidos por la ley sin necesidad de tu consentimiento, como cuando sean requeridas por una
        autoridad competente, o cuando resulten necesarias para la celebración o cumplimiento de un
        contrato celebrado en tu interés.
      </p>

      <h2>5. Derechos ARCO</h2>
      <p>
        Tienes derecho a <strong>Acceder</strong> a tus datos personales, a solicitar su{" "}
        <strong>Rectificación</strong> cuando sean inexactos o incompletos, su{" "}
        <strong>Cancelación</strong> cuando consideres que no se requieren para las finalidades
        señaladas, y a <strong>Oponerte</strong> a su tratamiento para fines específicos.
      </p>
      <p>
        Para ejercerlos, envía una solicitud a{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> que contenga:
      </p>
      <ol>
        <li>Tu nombre y un medio para comunicarte la respuesta.</li>
        <li>
          Los documentos que acrediten tu identidad o, en su caso, la representación legal de quien
          actúe en tu nombre.
        </li>
        <li>
          La descripción clara de los datos respecto de los que buscas ejercer algún derecho y del
          derecho que deseas ejercer.
        </li>
        <li>Cualquier otro elemento que facilite la localización de tus datos.</li>
      </ol>
      <p>
        Te comunicaremos la determinación adoptada en los plazos que establece la ley y, de resultar
        procedente, la haremos efectiva dentro de los plazos legales siguientes.
      </p>

      <h2>6. Revocación del consentimiento y limitación del uso</h2>
      <p>
        Puedes revocar el consentimiento que nos hayas otorgado, o limitar el uso o divulgación de tus
        datos, mediante solicitud al mismo correo electrónico. Ten en cuenta que, en algunos casos, no
        podremos atender tu solicitud de forma inmediata cuando alguna obligación legal nos requiera
        seguir tratando tus datos. Para dejar de recibir el newsletter basta con que nos lo solicites.
      </p>

      <h2>7. Seguridad</h2>
      <p>
        El Sitio transmite la información mediante conexiones cifradas (HTTPS/TLS). Adoptamos medidas
        de seguridad administrativas, técnicas y físicas razonables para proteger tus datos contra
        daño, pérdida, alteración, destrucción o uso, acceso o tratamiento no autorizado.
      </p>

      <h2>8. Cookies y tecnologías similares</h2>
      <p>
        El Sitio no utiliza cookies de publicidad ni herramientas de rastreo de terceros con fines de
        mercadotecnia. Pueden utilizarse elementos técnicos estrictamente necesarios para el
        funcionamiento del Sitio. Si en el futuro incorporamos otras tecnologías, actualizaremos este
        Aviso.
      </p>

      <h2>9. Cambios a este Aviso</h2>
      <p>
        Este Aviso puede modificarse para atender cambios legales, en nuestras prácticas o en los
        servicios que ofrecemos. Las modificaciones se publicarán en esta misma página, indicando la
        fecha de última actualización.
      </p>

      <h2>10. Autoridad</h2>
      <p>
        Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes
        acudir ante la autoridad competente en materia de protección de datos personales en México.
      </p>
    </LegalPage>
  )
}

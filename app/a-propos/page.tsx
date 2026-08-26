import type { Metadata } from "next"
import { Reveal } from "@/components/reveal"
import { TeteSection } from "@/components/section"
import { BandeCta } from "@/components/bande-cta"

export const metadata: Metadata = {
  title: "Qui je suis",
  description:
    "Hamza El Jaouahiry — réalisateur, compositeur et stratège de marque. Le conseiller derrière MOMENTUM : un artiste qui comprend ton art, un stratège qui comprend ton marché.",
}

const REPERES = [
  { annee: "2019", texte: "Premiers projets comme réalisateur et compositeur." },
  { annee: "2021", texte: "Licences Cinéma & Audiovisuel — Université Gustave Eiffel, puis Sorbonne Nouvelle." },
  { annee: "2023", texte: "Ingénieur du son en studio (Dans Le Labo)." },
  { annee: "2024", texte: "Lancement de Sinbury, univers transmédia : une ville fictive et son écosystème culturel." },
  { annee: "2025", texte: "MORI — projet musical produit et composé seul, chroniqué en Espagne, au Royaume-Uni et au Brésil." },
  { annee: "2026", texte: "Publication de « 30 Architectures — An Atlas of Narrative Patterns » et de l'essai « Le Narratif de Marque à l'Ère de l'IA »." },
]

export default function APropos() {
  return (
    <>
      <section className="bloc pt-[150px] md:pt-[190px]">
        <div className="cadre">
          <Reveal>
            <p className="index">QUI TE PARLE</p>
            <h1 className="titre-1 mt-7 max-w-[17ch] text-balance">
              Un artiste comprend ton art. Un stratège comprend ton <em className="not-italic text-cobalt-vif">marché</em>.
            </h1>
            <p className="chapo mt-8 max-w-[56ch]">
              Il t'en faut un qui fasse les deux. C'est la seule raison valable de me confier un regard sur ta carrière —
              et c'est la seule que je revendique.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <Reveal>
            <div className="space-y-6">
              <p className="corps text-[16px]">
                Je m'appelle Hamza El Jaouahiry. J'ai grandi à Noisy-le-Grand, je travaille depuis Paris, et je fais deux
                métiers qui se nourrissent l'un l'autre.
              </p>
              <p className="corps text-[16px]">
                Le premier : je crée. Réalisateur et compositeur depuis 2019, formé au cinéma à l'Université Gustave
                Eiffel puis à la Sorbonne Nouvelle, passé par le studio comme ingénieur du son. Je produis et je compose
                mon propre projet musical, MORI, dont la presse a parlé en Espagne, au Royaume-Uni et au Brésil. Je
                construis aussi depuis 2024 un univers transmédia, Sinbury : une ville fictive, sa mythologie, sa
                musique, ses images. Autrement dit, je connais de l'intérieur ce que tu traverses — le doute la veille
                d'une sortie, la tentation de tout reprendre à zéro, la solitude des décisions.
              </p>
              <p className="corps text-[16px]">
                Le second : je construis des identités. Je dirige Strawberry Production, un studio de narration de
                marque qui travaille pour des fondateurs et des dirigeants, et j'ai publié en 2026 deux ouvrages sur le
                récit de marque, dont un atlas de trente architectures narratives. Ce métier m'a appris une chose que la
                plupart des artistes n'apprennent jamais : une identité n'est pas une esthétique, c'est une promesse
                tenue avec constance assez longtemps pour devenir reconnaissable.
              </p>
              <p className="verdict mt-10">
                La plupart des conseillers artistiques savent parler du marché. Très peu ont déjà eu peur d'appuyer sur
                « publier ».
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bloc border-t border-filet bg-encre-haute">
        <div className="cadre-md">
          <TeteSection index="01" etiquette="REPÈRES" titre="Le parcours, en dates." />
          <Reveal>
            <div className="border-t border-filet">
              {REPERES.map((r) => (
                <div key={r.annee} className="grid gap-3 border-b border-filet py-6 md:grid-cols-[110px_1fr] md:gap-8">
                  <p className="font-mono text-[12px] tracking-[0.18em] text-cobalt-vif">{r.annee}</p>
                  <p className="text-[15px] font-light leading-relaxed text-craie-65">{r.texte}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bloc border-t border-filet">
        <div className="cadre-md">
          <TeteSection index="02" etiquette="POURQUOI MOMENTUM" titre="Pourquoi j'ai créé cet accompagnement." />
          <Reveal>
            <div className="space-y-6">
              <p className="corps text-[16px]">
                Parce que j'ai passé des années à prendre seul des décisions qui engageaient mon travail, et que j'ai
                perdu des mois entiers sur de mauvaises priorités — non par manque de travail, mais par manque
                d'interlocuteur.
              </p>
              <p className="corps text-[16px]">
                Ce qui m'a fait progresser, ce n'est jamais un conseil général sur l'industrie. C'est quelqu'un capable
                de regarder mon projet précis et de me dire : celui-là, pas celui-ci ; maintenant, pas dans six mois ;
                arrête ça, continue ceci.
              </p>
              <p className="corps text-[16px]">
                MOMENTUM existe pour offrir à d'autres artistes ce que j'aurais voulu avoir : un regard extérieur
                compétent, honnête, régulier, et accessible avant d'avoir « réussi ».
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <BandeCta
        titre="Si tu penses que ça peut t'être utile, dis-moi où tu en es."
        texte="Quelques questions sur ton projet, tes objectifs et ton niveau actuel. Je réponds à chaque candidature — y compris pour dire non."
      />
    </>
  )
}

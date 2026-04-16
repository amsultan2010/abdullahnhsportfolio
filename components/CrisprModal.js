'use client'

import { useEffect, useRef } from 'react'

const SECTIONS = [
  {
    heading: 'Abstract',
    body: `Gene editing has the potential to positively impact many fields, such as crop production, biofuel production, and cancer therapy. CRISPR/Cas9 has emerged as a useful and impactful tool to assist with the gene editing process. However, CRISPR/Cas9 requires the delivery of multiple components. It has multiple delivery methods, each with their own benefits and drawbacks. In this review, we discuss three types of CRISPR/Cas9 delivery methods, including transfection, transduction, and encapsulation. We highlight how each delivery method can be useful in different contexts, and how each method functions. CRISPR/Cas9 has the potential to enable precise gene editing, and its delivery methods can control the limits of its precision.`,
  },
  {
    heading: 'Introduction',
    body: [
      `Clustered Regularly Interspaced Short Palindromic Repeats (CRISPR) and CRISPR-associated protein 9 (Cas9) create a breakthrough tool in genetic engineering. The two main parts of CRISPR/Cas9 are the Cas9 enzyme, which cuts DNA at specific spots like a molecular scissors, and the guide RNA (gRNA), which points Cas9 toward the target DNA sequence. By letting the gRNA bind to a complementary DNA sequence, this method enables Cas9 to precisely induce a double-strand break at that location. Because of its ability to make precise changes to the genome, CRISPR/Cas9 simplifies gene editing for a wide range of uses. Common applications include gene knockout studies, in which scientists disrupt genes to study their function, and therapeutic therapies, such fixing genetic changes that cause disease. Furthermore, CRISPR/Cas9 is utilized in agriculture to create crops with desirable characteristics. Understanding these components and methods is critical for investigating the numerous uses of CRISPR/Cas9 in science and industry (Doudna and Charpentier 2014; Jinek 2012).`,
      `The goal of CRISPR/Cas9 is to make precise genome alterations possible, which has enormous research and therapeutic application implications. It is frequently employed to fix genetic abnormalities, introduce certain mutations, and produce gene knockouts. Biotechnology, where CRISPR/Cas9 is used to engineer microorganisms with industrial applications; medicine, where it is used to create models of human diseases and develop gene therapies; and agriculture, where it is used to develop crops with desirable traits (Tavakoli 2021). In spite of its promise, CRISPR/Cas9 cannot be used effectively in clinical settings unless a number of obstacles are addressed, the most important of which is making sure that the CRISPR components enter the target cell.`,
      `For the CRISPR/Cas9 technology to be successfully used, target cells must be supplied with the necessary components. These techniques, used to insert the Cas9 enzyme and gRNA into cells, are referred to as delivery. Effective distribution is crucial because it affects the specificity and efficiency of the genome editing process. Delivering the CRISPR components to the target cells without degradation without any side effects is substantially difficult.`,
      `A number of delivery strategies have been created to avoid these obstacles. For in vitro applications, transfection techniques including electroporation and lipid-mediated transfection are frequently used. By encasing the CRISPR components in lipid nanoparticles, which subsequently fuse with the cell membrane to deliver their payload, lipid-mediated transfection is achieved. Through the process of electroporation, brief holes in the cell membrane are made by electrical pulses, which permits the CRISPR components to enter the cells. For in vivo applications, transduction techniques such as lentivirus and adenovirus usage are frequently used. These viral vectors are effective to introduce genetic material into various cell types. To increase the efficacy and specificity of CRISPR administration, other techniques like hydrogels and nanoparticle-based delivery systems are currently being investigated (Lino 2018).`,
      `This review paper highlights the benefits and drawbacks of the different CRISPR/Cas9 delivery strategies. The paper highlights how crucial it is to maximize delivery methods in order to maximize the therapeutic potential of CRISPR/Cas9. This research highlights the use of hydrogels and nanoparticles, two novel techniques that show promise for enhancing the delivery of CRISPR components in clinical settings. Researchers want to fully utilize CRISPR/Cas9 for treating genetic illnesses and promoting biological research by tackling the delivery-related obstacles (Lino 2018).`,
    ],
  },
  {
    heading: 'Transfection',
    body: [
      `In order to change the genetic makeup of eukaryotic cells, foreign nucleic acids, such as DNA or RNA, are introduced through the process of transfection. Because it makes it easier for the CRISPR components to be inserted into target cells and allows for precise genome editing, this mechanism is essential for the delivery of CRISPR/Cas9. Chemical, biological, and physical techniques can be used to broadly classify transfection techniques. Nucleic acids are encapsulated in liposomes or polymers during chemical transfection to aid in their entry into cells. Viral vectors, which take advantage of viruses' innate capacity to insert genetic information into host cells, are commonly used in biological techniques. Nucleic acids can enter cells through permeabilized cell membranes caused by physical forces, such as those used in electroporation and microinjection. Every technique has benefits and drawbacks, with variables including effectiveness, compatibility with different cell types, and possible cytotoxicity playing a role. To optimize CRISPR/Cas9 delivery and achieve good gene editing outcomes, it is imperative to comprehend these transfection tactics (Chong 2021; Fajrial 2020).`,
      `The study written by Sousa et. al (2022) investigates the use of lipid nanoparticles for CRISPR/Cas9 delivery. The goal of the project is to develop a non-viral delivery method. Although CRISPR technology has advanced, effective and targeted delivery of CRISPR components is still difficult, making it difficult to be applied to the general public. The authors postulated that employing multivalent cationic lipid lipoplexes will improve CRISPR/Cas9 gene knockdown efficacy and transfection efficiency in HEK 293T cells. The scientists transfected through lipoplexes HEK 293T cells after encasing the Cas9/sgRNA-GFP plasmid into lipid nanoparticles. They measured the efficacy of gene deletion and searched for GFP expression using fluorescence microscopy and flow cytometry. Compared to monovalent lipids, the study showed that multivalent cationic lipid lipoplexes greatly increased gene knockout rates and transfection efficiency. Successful gene deletion, which is indicated by GFP signal reduction, demonstrates the efficiency of the lipid nanoparticle-mediated transfection technique. The authors came to the conclusion that lipid nanoparticles, which have high transfection efficiency and efficient gene editing capabilities in vitro, are a potential technique for CRISPR/Cas9 delivery, and are more effective than viral delivery methods (Sousa 2022).`,
      `A study by Fajrial et al. in 2020 highlights the contribution of micro- and nano-technology to more efficient CRISPR delivery. The efficacy and package size of conventional transfection procedures are often limited, especially for certain cell types. The author suggests that they need innovative physical transfection methods to overcome these restrictions. The author's hypothesis suggests developments in micro and nanotechnology improve the effectiveness and precision of physical transfection methods for CRISPR delivery. Several physical transfection platforms were reviewed, including nanostructure-mediated electroporation, which makes use of electric pulses to create temporary pores in cell membranes. The authors highlighted the possible benefits of these approaches by contrasting them with conventional procedures. The review found that nanostructure-mediated electroporation and other novel physical methods significantly improved transfection efficiency and cell viability compared to bulk electroporation. They determined that these techniques minimized cellular damage in comparison to stochastic uneven cell permeabilization. The authors concluded that physical transfection methods, particularly those leveraging micro and nanotechnology, hold great promise for enhancing CRISPR/Cas9 delivery, offering high efficiency and precision (Fajrial 2020).`,
      `The two investigations use different CRISPR/Cas9 delivery strategies, each with special benefits and drawbacks. The first study focuses on chemical transfection with lipid nanoparticles, which offers efficient gene editing in vitro and high transfection efficiency (Sousa 2022). The second study examines physical transfection techniques and emphasizes the potential for precision and low cellular harm, especially with regard to nanostructure-mediated electroporation (Fajrial 2020). The particular setting and the goals of the experiments determine the validity of various approaches. Because of its well-established efficacy, the chemical approach works well for studies that call for large transfection rates. Although they are still in their infancy, physical approaches provide novel approaches to difficult cell types and applications where accuracy is crucial. Because the research has various objectives and approaches, they come to diverse findings. In the first study, the goal is to use chemicals to increase transfection efficiency; in the second, new physical approaches are investigated to overcome constraints in traditional procedures. These different goals are reflected in their conclusions, as the first study validates the efficacy of lipid nanoparticles, while the second proposes that physical transfection techniques can be further enhanced by micro- and nanotechnology. Every study has unique constraints. While the physical approaches may have difficulties with scalability and consistent application across a variety of cell types, the chemical method may have problems with off-target effects and possible cytotoxicity. Both strategies have important uses in spite of these difficulties. In laboratory settings where fast and effective gene editing is needed, chemical transfection is a good fit, while physical approaches may be more useful for targeted applications in therapeutic settings. Both approaches have equal validity, but their suitability differs depending on the requirements of the experiment. When selecting amongst these transfection techniques, researchers need to take into account the particular needs of their CRISPR/Cas9 investigations.`,
    ],
  },
  {
    heading: 'Transduction',
    body: [
      `Transduction is an essential technique for introducing CRISPR/Cas9 components into target cells since it is the introduction of genetic material into a cell by viral vectors. This technique takes advantage of viruses' innate capacity to insert their genetic material into host cells, making the distribution of CRISPR/Cas9 machinery needed for accurate genome editing easier. Viral vectors like lentiviruses, adenoviruses, and adeno-associated viruses (AAVs), each with specific benefits in efficiency, capacity, and specificity, are commonly used in transduction processes. The amount of the genetic payload, the intended duration of gene expression, and the type of target cell are taken into consideration when researchers choose viral vectors, and comprehending the subtleties of transduction is essential for enhancing the distribution of CRISPR/Cas9 and guaranteeing favorable results for gene editing (Yin 2017; Gundry 2016).`,
      `AAV vectors were investigated by Yin et al. (2017) as a means of delivering CRISPR/Cas9 components to repair genetic mutations in vivo. The goal of the work was to overcome the difficulty of effectively and safely introducing 4.5 kb of Cas9 proteins into mammalian cells. The researchers postulated that improving AAV vectors would increase CRISPR/Cas9's therapeutic potential and delivery efficacy. They used a dual-vector approach, in which the guide RNA was transported by one AAV vector and the Cas9 protein by another. The research showed that DMD in a mouse model of Duchenne muscular dystrophy was successfully repaired using this method. The outcomes demonstrated the potential of AAV-mediated transduction for therapeutic applications by showing a notable restoration of dystrophin protein expression. The study concluded that AAV vectors present a potential platform for CRISPR/Cas9 delivery in vivo, despite ongoing obstacles such as immune responses and off-target consequences, specifically how most humans have already experienced an auto-immune virus as a child, and therefore have immune systems built to combat them.`,
      `Gundry et al. (2016) covered the delivery of CRISPR/Cas9 using lentiviral vectors to produce stable gene editing in human cells. The goal of this work was to overcome the transitory expression constraints from non-viral delivery techniques. A knowledge gap about long-term gene alteration was noted by the researchers, who theorized that lentiviral vectors would enable CRISPR components to be expressed continuously. To effectively disrupt genes, they introduced Cas9 and guide RNA into human hematopoietic stem cells using a lentiviral method. The <0.3% indels detected at the targets demonstrated the effective target gene editing and steady integration of CRISPR components with little off-target effects. According to the study's findings, lentiviral vectors can transmit CRISPR/Cas9 stably, which makes them appropriate for applications needing long-term gene alteration (Gundry et al. 2016).`,
      `The promise of viral vectors for CRISPR/Cas9 delivery is highlighted in both studies, but their methods and objectives are different. Yin et al. (2017) highlighted the effectiveness of AAV vectors in repairing genetic defects in animal models, underscoring their use for in vivo applications. Gundry et al. (2016), in contrast, addressed the requirement for long-term expression by concentrating on lentiviral vectors as a means of attaining stable gene editing in human cells. Lentiviral vectors provide more capacity and prolonged expression, but AAV vectors are safer. Both studies demonstrate the various approaches available for CRISPR/Cas9 delivery and emphasize how crucial using the right viral vectors depending on the particular needs of the gene-editing application is.`,
    ],
  },
  {
    heading: 'Encapsulation',
    body: [
      `Target cell delivery of the CRISPR/Cas9 system can be achieved using two novel strategies: hydrogels and nanoparticle-based delivery systems. Encapsulating and releasing biomolecules in a regulated manner, hydrogels are highly absorbent polymer networks. Moreover, they can be applied directly to the target tissue. In order to prevent CRISPR components from degrading and to enable their progressive distribution into cells, a three-dimensional scaffold is offered. Oppositely, nanoparticles are microscopic particles that can include CRISPR/Cas9 components. This allows for more precise and effective gene editing since the particles can be made to target particular cells or tissues. Furthermore, they are able to facilitate efficient uptake by cells, and reduce the risk of immune responses, compared to viral vectors.`,
      `Pérez-Sosa et al.'s study from 2024 investigates the delivery of CRISPR/Cas9 components to induced pluripotent stem cells (iPSCs) via hydrogels. The scientists wanted to shorten the time needed to produce stable genetically modified cell lines and increase the effectiveness of clonal selection. Prior approaches to CRISPR/Cas9 delivery to iPSCs encountered issues like poor efficiency and expensive prices. This required a more economical and efficient delivery strategy. The researchers postulated that clonal selection efficiency and cost-effectiveness will increase by combining CRISPR/Cas9 with hydrogel-based single-cell separation techniques. The group created a novel technique that merged single-cell isolation using hydrogel technology with CRISPR/Cas9 gene editing. They employed microfluidic techniques to isolate individual cells after encasing CRISPR components in hydrogels. The investigation showed that the hydrogel-based approach greatly lowered the time and expense needed to produce stable cell lines while also increasing the efficiency of clonal selection. Hydrogel-based CRISPR/Cas9 delivery presents a viable method for effective clonal selection and gene editing in iPSCs.`,
      `The study by Duan et al. (2021) reviews the delivery of CRISPR/Cas9 components to target cells using nanoparticles. The goal of the study was to address the issues of off-target effects and inadequate intracellular delivery efficiency. Conventional CRISPR/Cas9 delivery techniques have inefficiencies like poor delivery efficiency and possible off-target consequences. A more focused and effective delivery strategy was required. The researchers postulated that the specificity and efficiency of CRISPR/Cas9 component delivery could be improved by nanoparticles. The group created a number of nanoparticle-based delivery methods, including gold nanoparticles, lipid nanoparticles (LNPs), and cationic liposomes. To assess the efficacy and specificity of these systems, they conducted both in vitro and in vivo testing. The study discovered that the intracellular delivery effectiveness of CRISPR/Cas9 components was greatly increased by nanoparticle-based delivery systems. In particular, the lipid nanoparticles demonstrated excellent specificity and efficiency, with significant reductions in off-target effects compared to traditional methods. The study concluded that nanoparticle-based delivery systems, particularly lipid nanoparticles, represent a promising approach for precise and efficient CRISPR/Cas9 delivery, with potential applications in both research and clinical settings (Duan 2021).`,
      `Both studies highlight the potential of encapsulation-based delivery methods for CRISPR/Cas9, but they focus on different aspects. Pérez-Sosa et al. (2024) demonstrated the effectiveness of hydrogel-based delivery for improving clonal selection efficiency in iPSCs, while Duan et al. (2021) showed the broad applicability of nanoparticle-based systems for precise and efficient CRISPR/Cas9 delivery. Together, these studies suggest that encapsulation methods offer significant advantages over traditional delivery approaches, including improved efficiency, reduced off-target effects, and enhanced biocompatibility. The choice between hydrogel and nanoparticle-based delivery will depend on the specific requirements of the application, with hydrogels being more suitable for localized delivery and nanoparticles offering greater versatility for systemic applications.`,
    ],
  },
  {
    heading: 'Conclusion',
    body: `In conclusion, the field of CRISPR/Cas9 delivery has seen significant advancements with the development of various methods including transfection, transduction, and encapsulation. Each method offers unique advantages and faces specific challenges. Transfection methods, both chemical and physical, provide efficient in vitro delivery but may have limitations in vivo. Transduction using viral vectors like AAV and lentivirus offers high efficiency and stable expression but raises concerns about immunogenicity and off-target effects. Encapsulation methods, including hydrogels and nanoparticles, show promise for targeted delivery with reduced immune responses. The optimal delivery method depends on the specific application, target cell type, and desired duration of gene expression. Future research should focus on improving the safety, efficiency, and specificity of these delivery methods to fully realize the therapeutic potential of CRISPR/Cas9 technology. As the field continues to evolve, combining multiple delivery strategies may offer the most promising approach for achieving precise and effective genome editing in both research and clinical settings.`,
  },
]

export default function CrisprModal({ isOpen, onClose }) {
  const overlayRef = useRef(null)
  const closeRef   = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = e => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'Tab') {
        const els = overlayRef.current?.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')
        if (!els?.length) return
        if (e.shiftKey) { if (document.activeElement === els[0]) { e.preventDefault(); els[els.length - 1].focus() } }
        else            { if (document.activeElement === els[els.length - 1]) { e.preventDefault(); els[0].focus() } }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    setTimeout(() => closeRef.current?.focus(), 50)
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ backgroundColor: 'rgba(17,17,17,0.9)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label="CRISPR/Cas9 Delivery Methods Paper"
    >
      <div
        className="modal-enter w-full flex flex-col"
        style={{
          maxWidth: '760px',
          maxHeight: '80vh',
          backgroundColor: '#1a1a1a',
          border: '1px solid #2a2a2a',
          borderRadius: '4px',
          boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
        }}
      >
        {/* Sticky header */}
        <div
          className="flex items-start justify-between px-8 pt-7 pb-6 shrink-0"
          style={{ borderBottom: '1px solid #2a2a2a' }}
        >
          <div className="flex flex-col gap-2 pr-8">
            <h2
              style={{
                fontFamily: 'var(--font-jetbrains), "JetBrains Mono", "Courier New", monospace',
                fontSize: '16px',
                fontWeight: 600,
                color: '#f5f5f5',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
              }}
            >
              The Benefits and Drawbacks of CRISPR/Cas9 Delivery Methods
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-jetbrains), "JetBrains Mono", "Courier New", monospace',
                fontSize: '13px',
                color: '#666',
                letterSpacing: '0.02em',
              }}
            >
              Sultan, A.M., Pearson, A.N.
            </p>
          </div>
          <button
            ref={closeRef}
            onClick={onClose}
            className="shrink-0 transition-colors"
            style={{
              fontFamily: 'var(--font-jetbrains), "JetBrains Mono", monospace',
              fontSize: '18px',
              color: '#22c55e',
              lineHeight: 1,
              padding: '2px 6px',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#4ade80'}
            onMouseLeave={e => e.currentTarget.style.color = '#22c55e'}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-8 py-8" style={{ scrollbarColor: '#2a2a2a #1a1a1a' }}>
          {SECTIONS.map((section, i) => (
            <div key={section.heading} style={{ marginBottom: i < SECTIONS.length - 1 ? '32px' : 0 }}>
              <h3
                style={{
                  fontFamily: 'var(--font-jetbrains), "JetBrains Mono", "Courier New", monospace',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: '#22c55e',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                {section.heading}
              </h3>
              {Array.isArray(section.body)
                ? section.body.map((para, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                        fontSize: '15px',
                        color: '#a3a3a3',
                        lineHeight: 1.8,
                        marginBottom: j < section.body.length - 1 ? '16px' : 0,
                      }}
                    >
                      {para}
                    </p>
                  ))
                : (
                  <p
                    style={{
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                      fontSize: '15px',
                      color: '#a3a3a3',
                      lineHeight: 1.8,
                    }}
                  >
                    {section.body}
                  </p>
                )
              }
              {i < SECTIONS.length - 1 && (
                <div style={{ height: '1px', backgroundColor: '#2a2a2a', marginTop: '32px' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

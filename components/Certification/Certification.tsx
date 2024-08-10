import { CertificationProps } from "@/types";
import { format } from "date-fns";
import Image from "next/image";
import styles from "./Certification.module.css";

export default function Certification({ certification }: CertificationProps) {
    const { name, issuer, issueDate, credentialUrl, certificationImageSrc } = certification;
    return (
        <div className={styles.certification}>
            <h2 className={styles.certificationName}>{name}</h2>
            <p>Issued by {issuer}</p>
            <p>Issued on {format(issueDate, 'yyyy-MM-dd')}</p>
            <p>Click <a aria-label='Link to certification (opens in new tab)' href={credentialUrl} target='_blank'>here</a> to see the certification...</p>
            {certificationImageSrc && <Image src={certificationImageSrc} alt={`Logo of Certification ${name} from ${issuer}`} width={50/96*98} height={50} />}
        </div>
    );
}

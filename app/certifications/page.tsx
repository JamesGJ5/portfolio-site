import Certification from "@/components/Certification/Certification";
import ComponentList from "@/components/ComponentList/ComponentList";
import { certifications } from "@/data/certifications";
import styles from "./page.module.css";

export default function CertificationsPage() {
    return (
        <>
            <h1>My Certifications...</h1>
            <ol className={styles.certificationList}>
                <ComponentList dataList={certifications.map(certification => ({certification}))} ListedComponent={Certification}/>
            </ol>
        </>
    );
}

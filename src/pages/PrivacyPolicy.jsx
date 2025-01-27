import React from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const privacyPolicy = t('privacyPolicy', { returnObjects: true });
  
  return (
    <div className="flex animate-fadeInTop justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-4xl bg-white text-black p-8 rounded-lg">
        <section className="introduction">
          <h1 className="text-3xl font-bold mb-4">{privacyPolicy.title}</h1>
          <p className="mb-4">{privacyPolicy.lastUpdated}</p>

          <p className="mb-4">{privacyPolicy.introduction.paraText}</p>
        </section>

        <section className="interpretationDefinitions">
          <h2 className="text-2xl font-bold mb-4">{privacyPolicy.interpretationDefinitions.title}</h2>
          <h3 className="text-xl font-bold mb-1">{privacyPolicy.interpretationDefinitions.interpretation.title}</h3>
          <p className="mb-4">{privacyPolicy.interpretationDefinitions.interpretation.paraText}</p>
        </section>

        <section className="definitions">
          <h2 className="font-bold text-xl mb-1">{privacyPolicy.interpretationDefinitions.definitions.title}</h2>
          <ul className="list-disc ml-4 mb-4">
            {Object.values(privacyPolicy.interpretationDefinitions.definitions.list).map((item, index) => (
              <li key={index}>
                <strong>{item.title}{" "}</strong>{item.content}
              </li>
            ))}
          </ul>
        </section>

        <section className="collectingAndUsingYourPersonalData mb-6">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.collectingAndUsingYourPersonalData.title}</h2>
          <h3 className="font-bold mb-1 text-xl">{privacyPolicy.collectingAndUsingYourPersonalData.ageConsent.title}</h3>
          <p className="mb-4">{privacyPolicy.collectingAndUsingYourPersonalData.ageConsent.paraText1}
            <a href="mailto:legal@infeelit.com" className="text-blue-500"> legal@infeelit.com.</a>
          </p>
          <p>{privacyPolicy.collectingAndUsingYourPersonalData.ageConsent.paraText2}</p>
        </section>

        <section className="typesOfPersonalData">
          <h3 className="font-bold mb-4 text-xl ">{privacyPolicy.typesOfPersonalData.title}</h3>
          <p className="mb-4 text-lg">
            <strong>{privacyPolicy.typesOfPersonalData.personalData.title}{" "}</strong><br />
            {privacyPolicy.typesOfPersonalData.personalData.text1}
          </p>
          <ul className="list-disc ml-4 mb-4">
            {Object.values(privacyPolicy.typesOfPersonalData.personalData.list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="usageData mb-4 text-lg">
            <strong>{privacyPolicy.typesOfPersonalData.usageData.title}</strong><br />
            {privacyPolicy.typesOfPersonalData.usageData.paraText1}
          </p>

          <p className="mb-4">{privacyPolicy.typesOfPersonalData.usageData.paraText2}</p>
        </section>

        <section className="consentForAccessingData">
          <h3 className="font-bold mb-1 text-lg">{privacyPolicy.consentForAccessingData.title}</h3>
          <p className="mb-4">{privacyPolicy.consentForAccessingData.paraText1}</p>
          <ul className="list-disc ml-4 mb-4">
            {Object.values(privacyPolicy.consentForAccessingData.list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mb-4">{privacyPolicy.consentForAccessingData.paraText2}</p>
          <ul className="list-disc ml-4 mb-4">
            {Object.values(privacyPolicy.consentForAccessingData.list2).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="informationFromThirdPartySocialMediaServices">
          <h3 className="font-bold mb-1 text-lg">{privacyPolicy.informationFromThirdPartySocialMediaServices.title}</h3>
          <p className="mb-4">{privacyPolicy.informationFromThirdPartySocialMediaServices.paraText1}</p>
          <ul className="list-disc ml-4 mb-4">
            {Object.values(privacyPolicy.informationFromThirdPartySocialMediaServices.list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mb-4">{privacyPolicy.informationFromThirdPartySocialMediaServices.paraText2}</p>
        </section>

        <section className="trackingTechnologiesAndCookies">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.trackingTechnologiesAndCookies.title}</h2>
          <p className="mb-4">{privacyPolicy.trackingTechnologiesAndCookies.text1}</p>
          <ul className="list-disc ml-4 mb-4">
            <li>
              <strong>{privacyPolicy.trackingTechnologiesAndCookies.technologies.cookies.title}{" "}</strong>
              {privacyPolicy.trackingTechnologiesAndCookies.technologies.cookies.text}
            </li>
            <li>
              <strong>{privacyPolicy.trackingTechnologiesAndCookies.technologies.flashCookies.title}{" "}</strong>
              {privacyPolicy.trackingTechnologiesAndCookies.technologies.flashCookies.text}
              <a
                href={privacyPolicy.trackingTechnologiesAndCookies.technologies.flashCookies.link}
                className="text-blue-500"
                target="_blank"
              ><p>
               https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flashhtml#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects
               </p>
              </a>
            </li>
            <li>
              <strong>{privacyPolicy.trackingTechnologiesAndCookies.technologies.webBeacons.title}:{" "}</strong>
              {privacyPolicy.trackingTechnologiesAndCookies.technologies.webBeacons.text}
            </li>
          </ul>

          <p className="mb-4">{privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.text1}{" "}</p>
          <ul className="list-disc ml-4 mb-4">
            <li>
              <strong>{privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.necessary.title}:{" "}</strong>
              {privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.necessary.text}
            </li>
            <li>
              <strong>{privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.noticeAcceptance.title}:{" "}</strong>
              {privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.noticeAcceptance.text}
            </li>
            <li>
              <strong>{privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.functionality.title}:{" "}</strong>
              {privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.functionality.text}
            </li>
            <li>
              <strong>{privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.trackingPerformance.title}:{" "}</strong>
              {privacyPolicy.trackingTechnologiesAndCookies.cookiesTypes.trackingPerformance.text}
            </li>
          </ul>

          <p className="mb-4">{privacyPolicy.trackingTechnologiesAndCookies.text2}</p>
        </section>

        <section className="useOfYourPersonalData">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.useOfYourPersonalData.title}</h2>
          <ul className="list-disc ml-4 mb-4">
            {Object.values(privacyPolicy.useOfYourPersonalData.list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="sharingYourPersonalData">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.sharingYourPersonalData.title}</h2>
          <p className="mb-4">{privacyPolicy.sharingYourPersonalData.text1}</p>
          <ul className="list-disc ml-4 mb-4">
            {Object.values(privacyPolicy.sharingYourPersonalData.list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="retentionOfYourPersonalData">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.retentionOfYourPersonalData.title}</h2>
          <p className="mb-4">{privacyPolicy.retentionOfYourPersonalData.text1}</p>
        </section>

        <section className="transferOfYourPersonalData">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.transferOfYourPersonalData.title}</h2>
          <p className="mb-4">{privacyPolicy.transferOfYourPersonalData.text1}</p>
          <p className="mb-4">{privacyPolicy.transferOfYourPersonalData.text2}</p>
        </section>

        <h2 className="text-xl font-bold mb-2">{privacyPolicy.disclosureOfYourPersonalData.title}</h2>

        <section className="businessTransaction">
          <p className="mb-4">
            <strong>{privacyPolicy.disclosureOfYourPersonalData.businessTransaction.title}</strong>
          </p>
          <p className="list-disc ml-4 mb-4">{privacyPolicy.disclosureOfYourPersonalData.businessTransaction.text}</p>
        </section>

        <section className="lawEnforcement">
          <p className="mb-4">
            <strong>{privacyPolicy.disclosureOfYourPersonalData.lawEnforcement.title}{" "}</strong>
          </p>
          <p className="list-disc ml-4 mb-4">{privacyPolicy.disclosureOfYourPersonalData.lawEnforcement.text}</p>
        </section>

        <section className="otherLegalRequirements">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.disclosureOfYourPersonalData.otherLegalRequirements.title}</h2>
          <ul className="list-disc pl-4 mb-4">
            {Object.values(privacyPolicy.disclosureOfYourPersonalData.otherLegalRequirements.list).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="securityOfYourPersonalData mb-4">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.securityOfYourPersonalData.title}</h2>
          <p>{privacyPolicy.securityOfYourPersonalData.text}</p>
        </section>

        <section className="GPDRPrivacy">
          <h2 className="text-xl font-bold mb-6">{privacyPolicy.GPDRPrivacy.title}</h2>
          <h3 className="text-lg font-bold mb-2">{privacyPolicy.GPDRPrivacy.legalBasisForProcessingPersonalData.title}</h3>
          <ul className="list-disc pl-8 mb-4">
            {Object.values(privacyPolicy.GPDRPrivacy.legalBasisForProcessingPersonalData.list).map((item, index) => (
              <li key={index}>
                <strong>{item.title}{" "}</strong>{item.content}
              </li>
            ))}
          </ul>
          <p>{privacyPolicy.GPDRPrivacy.legalBasisForProcessingPersonalData.list.paragraphText}</p>
        </section>

        <section className="rightsUnderGPDR mt-4">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.rightsUnderGPDR.title}</h2>
          <p className="mb-4">{privacyPolicy.rightsUnderGPDR.paraText}</p>
          <ul className="list-disc pl-4 mb-4">
            {Object.values(privacyPolicy.rightsUnderGPDR.list).map((item, index) => (
              <li key={index}>
                <strong>{item.title}{" "}</strong>{item.content}
              </li>
            ))}
          </ul>
        </section>

        <section className="GPDProtectionRights">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.GPDProtectionRights.title}</h2>
          <p className="mb-4">{privacyPolicy.GPDProtectionRights.paraText1}</p>
          <p className="mb-4">{privacyPolicy.GPDProtectionRights.paraText2}</p>
        </section>

        <section className="childrenPrivacy">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.childrenPrivacy.title}</h2>
          <p className="mb-4">{privacyPolicy.childrenPrivacy.paraText}</p>
        </section>

        <section className="linkToOtherWeb">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.linkToOtherWeb.title}</h2>
          <p className="mb-4">{privacyPolicy.linkToOtherWeb.paraText}</p>
        </section>

        <section className="changesToPrivacyPolicy">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.changesToPrivacyPolicy.title}</h2>
          <p className="mb-4">{privacyPolicy.changesToPrivacyPolicy.paraText}</p>
        </section>

        <section className="ContactUsSection">
          <h2 className="text-xl font-bold mb-2">{privacyPolicy.ContactUsSection.title}</h2>
          <p className="mb-4">{privacyPolicy.ContactUsSection.paraText}</p>
          <ul className="list-disc ml-4 mb-4">
            <li>
              By email:{" "}
              <a href="mailto:privacy@infeelit.com" className="text-blue-500">
                privacy@infeelit.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

import React from 'react'
import { useTranslation } from 'react-i18next'
const TermsAndService = () => {
    const {t} = useTranslation()
  return (
  <>
 <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-4xl bg-white text-black p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">{t('termsOfService.title')}</h1>
        <p>{t('termsOfService.lastUpdated')}</p>

        {Object.entries(t('termsOfService.sections', { returnObjects: true })).map(([key, section]) => (
          <div key={key}>
            <h2 className="text-xl font-semibold mt-6">{section.title}</h2>
            <p className="mt-2">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default TermsAndService
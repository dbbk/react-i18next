import React from 'react';
import { translate } from 'react-i18next';
import i18n from '../i18n';

function MyComponennt({ t, initialI18nStore }) {
  return (
    <div>
      {t('extendedComponent')}
    </div>
  );
}

const Extended = translate()(MyComponennt);

export default Extended;
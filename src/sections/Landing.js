import React from 'react';

import Username from '../components/Username';
import Desc from '../components/Desc';
import Icons from '../components/Icons';

export default function landing() {
  return (
    <section className="landing-page">
      <Username />
      <Desc />
      <Icons />
    </section>
  );
}

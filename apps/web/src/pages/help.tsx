import React from 'react';
import dynamic from 'next/dynamic';
import { markdown } from '@/constants';
import { Markdown } from '@/components';

const AdContainer = dynamic(() => import('@/components/AdContainer'), {
  ssr: false,
});

const Help = () => {
  return (
    <section className='space-y-12'>
      <AdContainer slot='7063833038' />
      <Markdown content={markdown.help} />
    </section>
  );
};

export default Help;

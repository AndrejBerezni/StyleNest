import { useMemo } from 'react';

import {
  Recycle,
  PaintBucket,
  Sprout,
  Droplet,
  Shirt,
  HandHeart,
  Wind,
  Component,
  Layers,
  ClipboardCheck,
  ShieldPlus,
  Tag,
  Rainbow,
  Infinity,
  Shapes,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import Tabs, { Tab } from '@/components/ui/tabs';

import SpecificationTab, { Specification } from './specification-tab';

export default function ProductSpecificationsSection() {
  const translate = useTranslations('productSpec');

  const specifications: Record<string, Specification> = useMemo(
    () => ({
      sustainability: {
        id: 'sustainability',
        title: translate('ecoFriendlyChoice'),
        description: translate('sustainabilityIntro'),
        img: '/images/yellow-desktop.jpg',
        items: [
          { name: translate('recycledMaterials'), icon: <Recycle size={20} /> },
          { name: translate('lowImpactDye'), icon: <PaintBucket size={20} /> },
          { name: translate('carbonNeutral'), icon: <Sprout size={20} /> },
          { name: translate('waterConservation'), icon: <Droplet size={20} /> },
        ],
      },
      comfort: {
        id: 'comfort',
        title: translate('uncompromisedComfort'),
        description: translate('comfortIntro'),
        img: '/images/black-desktop.jpg',
        items: [
          { name: translate('ergonomicFits'), icon: <Shirt size={20} /> },
          {
            name: translate('softToTheTouchFabrics'),
            icon: <HandHeart size={20} />,
          },
          { name: translate('breathableWeaves'), icon: <Wind size={20} /> },
          {
            name: translate('thoughtfulDesign'),
            icon: <Component size={20} />,
          },
        ],
      },
      durability: {
        id: 'durability',
        title: translate('builtToLast'),
        description: translate('durabilityIntro'),
        img: '/images/chair-desktop.jpg',
        items: [
          {
            name: translate('reinforcedConstruction'),
            icon: <Layers size={20} />,
          },
          {
            name: translate('qualityControl'),
            icon: <ClipboardCheck size={20} />,
          },
          {
            name: translate('materialResilience'),
            icon: <ShieldPlus size={20} />,
          },
          { name: translate('warrantyAndRepair'), icon: <Tag size={20} /> },
        ],
      },
      versatility: {
        id: 'versatility',
        title: translate('versatileByDesign'),
        description: translate('versatilityIntro'),
        img: '/images/clothes-desktop.jpg',
        items: [
          { name: translate('adaptiveStyles'), icon: <Rainbow size={20} /> },
          { name: translate('functionalFashion'), icon: <Shirt size={20} /> },
          {
            name: translate('timelessAesthetics'),
            icon: <Infinity size={20} />,
          },
          {
            name: translate('mixAndMatchPotential'),
            icon: <Shapes size={20} />,
          },
        ],
      },
    }),
    [translate]
  );

  const tabs: Tab[] = useMemo(
    () => [
      {
        value: 'sustainability',
        label: translate('sustainability'),
        panel: <SpecificationTab spec={specifications.sustainability} />,
      },
      {
        value: 'comfort',
        label: translate('comfort'),
        panel: <SpecificationTab spec={specifications.comfort} />,
      },
      {
        value: 'durability',
        label: translate('durability'),
        panel: <SpecificationTab spec={specifications.durability} />,
      },
      {
        value: 'versatility',
        label: translate('versatility'),
        panel: <SpecificationTab spec={specifications.versatility} />,
      },
    ],
    [specifications, translate]
  );

  return (
    <section className="section-wrapper">
      <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
        {translate('discover')}
      </h2>
      <p className="text-ink-600 mb-16 text-lg">{translate('introduction')}</p>
      <Tabs tabs={tabs} />
    </section>
  );
}

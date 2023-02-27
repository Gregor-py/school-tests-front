import ukrHist from '@/assets/subject-images/ukr-hist.jpg';
import ukrLang from '@/assets/subject-images/ukr-lang.png';
import ukrLiterature from '@/assets/subject-images/ukr-literature.jpg';
import algebra from '@/assets/subject-images/algebra.jpg';
import geometry from '@/assets/subject-images/geometry.jpg';
import { StaticImageData } from 'next/image';

export const subjectImageData: { [key: string]: StaticImageData } = {
  'ukr-hist': ukrHist,
  'ukr-lang': ukrLang,
  'ukr-literature': ukrLiterature,
  algebra: algebra,
  geometry: geometry
};

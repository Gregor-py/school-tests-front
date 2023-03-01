import ukrHist from '@/assets/subject-images/ukr-hist.jpg';
import ukrLang from '@/assets/subject-images/ukr-lang.png';
import ukrLiterature from '@/assets/subject-images/ukr-literature.jpg';
import algebra from '@/assets/subject-images/algebra.jpg';
import geometry from '@/assets/subject-images/geometry.jpg';
import biology from '@/assets/subject-images/biology.jpg';
import vsesvHist from '@/assets/subject-images/vsesv-hist.webp';
import geography from '@/assets/subject-images/geography.png';
import english from '@/assets/subject-images/english.jpg';
import informatuka from '@/assets/subject-images/informatuka.jpg';
import physics from '@/assets/subject-images/physics.webp';
import chemistry from '@/assets/subject-images/chemistry.png';
import { StaticImageData } from 'next/image';

export const subjectImageData: { [key: string]: StaticImageData } = {
  'ukr-hist': ukrHist,
  'ukr-lang': ukrLang,
  'ukr-literature': ukrLiterature,
  algebra: algebra,
  geometry: geometry,
  biology: biology,
  'vsesv-hist': vsesvHist,
  geography: geography,
  english: english,
  informatuka: informatuka,
  physics: physics,
  chemistry: chemistry
};

/*
- BYMEDIA TECH CRAZY
- TEL: +24165730123
*/
import { Platform } from 'react-native';
import { GameType } from '@types/index';

export const APP = {
  name: 'EASYCASH AFRICA',
  version: '1.0.0',
  buildNumber: '1',
  bundleId: Platform.select({
    ios: 'com.easycash.africa',
    android: 'com.easycash.africa',
  }),
};

export const POINTS = {
  video: {
    min: 10,
    max: 100,
    dailyLimit: 50,
  },
  game: {
    min: 20,
    max: 500,
    dailyLimit: 20,
  },
  survey: {
    min: 50,
    max: 1000,
    weeklyLimit: 3,
  },
  referral: {
    referrer: 500,
    referred: 200,
  },
  dailyBonus: 100,
  streakBonus: 50,
};

export const WITHDRAWAL = {
  minPoints: 5000,
  maxPoints: 1000000,
  fees: 0.02, // 2%
  methods: [
    { id: 'orange', name: 'Orange Money', icon: 'phone-portrait' },
    { id: 'mtn', name: 'MTN MoMo', icon: 'phone-portrait' },
    { id: 'wave', name: 'Wave', icon: 'phone-portrait' },
    { id: 'moov', name: 'Moov Money', icon: 'phone-portrait' },
    { id: 'airtel', name: 'Airtel Money', icon: 'phone-portrait' },
    { id: 'free', name: 'Free Money', icon: 'phone-portrait' },
  ],
};

export const GAMES: GameType[] = [
  {
    id: 'spin_wheel',
    name: 'Roue de la fortune',
    icon: 'sync',
    minBet: 0,
    maxBet: 1000,
    maxPlaysPerDay: 20,
    description: 'Faites tourner la roue et gagnez jusqu\'à 10x votre mise!',
  },
  {
    id: 'scratch_card',
    name: 'Carte à gratter',
    icon: 'grid',
    minBet: 0,
    maxBet: 500,
    maxPlaysPerDay: 30,
    description: ' Grattez et découvrez si vous avez gagné!',
  },
  {
    id: 'memory',
    name: 'Memory',
    icon: 'apps',
    minBet: 0,
    maxBet: 0,
    maxPlaysPerDay: 10,
    description: 'Testez votre mémoire et gagnez des points!',
  },
  {
    id: 'quiz',
    name: 'Quiz',
    icon: 'help-circle',
    minBet: 0,
    maxBet: 0,
    maxPlaysPerDay: 15,
    description: 'Répondez aux questions et prouvez votre culture!',
  },
  {
    id: 'lucky_draw',
    name: 'Tirage chanceux',
    icon: 'ticket',
    minBet: 100,
    maxBet: 1000,
    maxPlaysPerDay: 5,
    description: 'Tentez votre chance pour le jackpot!',
  },
];

export const LEVELS = [
  { level: 1, minPoints: 0, title: 'Débutant', color: '#808080' },
  { level: 2, minPoints: 1000, title: 'Apprenti', color: '#4CAF50' },
  { level: 3, minPoints: 5000, title: 'Confirmé', color: '#2196F3' },
  { level: 4, minPoints: 10000, title: 'Expert', color: '#9C27B0' },
  { level: 5, minPoints: 50000, title: 'Champion', color: '#FF9800' },
  { level: 6, minPoints: 100000, title: 'Maître', color: '#F44336' },
  { level: 7, minPoints: 500000, title: 'Légende', color: '#FFD700' },
  { level: 8, minPoints: 1000000, title: 'Millionnaire', color: '#FF6B00' },
];

export const BADGES = [
  {
    id: 'first_video',
    name: 'Première vidéo',
    description: 'Regardez votre première vidéo',
    icon: 'videocam',
    points: 50,
  },
  {
    id: 'video_master',
    name: 'Maître des vidéos',
    description: 'Regardez 1000 vidéos',
    icon: 'videocam',
    points: 1000,
  },
  {
    id: 'first_game',
    name: 'Premier jeu',
    description: 'Jouez à votre premier jeu',
    icon: 'game-controller',
    points: 50,
  },
  {
    id: 'game_master',
    name: 'Maître des jeux',
    description: 'Jouez à 500 jeux',
    icon: 'game-controller',
    points: 1000,
  },
  {
    id: 'first_referral',
    name: 'Premier filleul',
    description: 'Parrainez votre premier ami',
    icon: 'people',
    points: 100,
  },
  {
    id: 'referral_master',
    name: 'Maître parrain',
    description: 'Parrainez 50 amis',
    icon: 'people',
    points: 5000,
  },
  {
    id: 'streak_7',
    name: 'Semaine de feu',
    description: 'Connecté 7 jours de suite',
    icon: 'flame',
    points: 200,
  },
  {
    id: 'streak_30',
    name: 'Mois de feu',
    description: 'Connecté 30 jours de suite',
    icon: 'flame',
    points: 1000,
  },
  {
    id: 'first_withdrawal',
    name: 'Premier retrait',
    description: 'Effectuez votre premier retrait',
    icon: 'cash',
    points: 100,
  },
  {
    id: 'big_earner',
    name: 'Gros gagneur',
    description: 'Gagnez 100 000 points',
    icon: 'trophy',
    points: 5000,
  },
];

export const NOTIFICATION_TYPES = {
  daily_bonus: 'daily_bonus',
  video_reward: 'video_reward',
  game_reward: 'game_reward',
  referral_bonus: 'referral_bonus',
  withdrawal_update: 'withdrawal_update',
  level_up: 'level_up',
  badge_earned: 'badge_earned',
  challenge_completed: 'challenge_completed',
  promo: 'promo',
  alert: 'alert',
  system: 'system',
};

export const COUNTRIES = [
  { code: 'CI', name: 'Côte d\'Ivoire', phonePrefix: '+225', flag: '🇨🇮', currency: 'XOF' },
  { code: 'SN', name: 'Sénégal', phonePrefix: '+221', flag: '🇸🇳', currency: 'XOF' },
  { code: 'ML', name: 'Mali', phonePrefix: '+223', flag: '🇲🇱', currency: 'XOF' },
  { code: 'BF', name: 'Burkina Faso', phonePrefix: '+226', flag: '🇧🇫', currency: 'XOF' },
  { code: 'CM', name: 'Cameroun', phonePrefix: '+237', flag: '🇨🇲', currency: 'XAF' },
  { code: 'TG', name: 'Togo', phonePrefix: '+228', flag: '🇹🇬', currency: 'XOF' },
  { code: 'BJ', name: 'Bénin', phonePrefix: '+229', flag: '🇧🇯', currency: 'XOF' },
  { code: 'NE', name: 'Niger', phonePrefix: '+227', flag: '🇳🇪', currency: 'XOF' },
  { code: 'TD', name: 'Tchad', phonePrefix: '+235', flag: '🇹🇩', currency: 'XAF' },
  { code: 'CF', name: 'Centrafrique', phonePrefix: '+236', flag: '🇨🇫', currency: 'XAF' },
  { code: 'GA', name: 'Gabon', phonePrefix: '+241', flag: '🇬🇦', currency: 'XAF' },
  { code: 'CG', name: 'Congo', phonePrefix: '+242', flag: '🇨🇬', currency: 'XAF' },
  { code: 'CD', name: 'RDC', phonePrefix: '+243', flag: '🇨🇩', currency: 'CDF' },
  { code: 'RW', name: 'Rwanda', phonePrefix: '+250', flag: '🇷🇼', currency: 'RWF' },
  { code: 'BI', name: 'Burundi', phonePrefix: '+257', flag: '🇧🇮', currency: 'BIF' },
];

export const API = {
  baseURL: process.env.API_URL || 'https://api.easycash.africa/v1',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

export const STORAGE_KEYS = {
  auth: '@auth',
  user: '@user',
  theme: '@theme',
  settings: '@settings',
  notifications: '@notifications',
  cache: '@cache',
};

export const ERROR_MESSAGES = {
  network: 'Erreur réseau. Vérifiez votre connexion.',
  server: 'Erreur serveur. Réessayez plus tard.',
  unauthorized: 'Non autorisé. Connectez-vous.',
  forbidden: 'Accès interdit.',
  notFound: 'Ressource non trouvée.',
  validation: 'Données invalides.',
  unknown: 'Erreur inconnue.',
};

export const SUCCESS_MESSAGES = {
  login: 'Connexion réussie!',
  register: 'Inscription réussie!',
  logout: 'Déconnexion réussie!',
  withdraw: 'Demande de retrait envoyée!',
  referral: 'Code de parrainage copié!',
  video: 'Vidéo regardée! Points gagnés!',
  game: 'Jeu terminé! Points gagnés!',
};

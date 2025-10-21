import { addDays, format, parseISO, startOfToday } from "date-fns";
import { ptBR } from "date-fns/locale";

export type DurationOption = "30" | "60";

type DayAvailability = {
  slots: string[];
  blocked?: string[];
};

export type ProfessionalProfile = {
  id: string;
  nome: string;
  email: string;
  bio: string;
  endereco: string;
  avatarUrl: string;
  duracaoPadrao: DurationOption;
  availability: Record<DurationOption, Record<string, DayAvailability>>;
};

export type ProfessionalPublicInfo = Pick<ProfessionalProfile, "id" | "nome" | "email" | "avatarUrl" | "duracaoPadrao">;

export type AvailableSlot = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type ScheduledEvent = {
  id: string;
  titulo: string;
  inicio: string; // HH:mm
  duracao: DurationOption;
  local?: string;
  cliente?: string;
};

export const SUPPORTED_DURATIONS: Record<DurationOption, string> = {
  "30": "30 minutos",
  "60": "1 hora",
};

const DATE_KEY_FORMAT = "yyyy-MM-dd";
const baseDate = startOfToday();
const createDateKey = (offset: number) => format(addDays(baseDate, offset), DATE_KEY_FORMAT);
const createDayAvailability = (slots: string[], blocked: string[] = []): DayAvailability => ({ slots, blocked });

const createEvent = (
  id: string,
  titulo: string,
  inicio: string,
  duracao: DurationOption,
  cliente: string,
  local = "Online",
): ScheduledEvent => ({ id, titulo, inicio, duracao, cliente, local });

const PROFESSIONALS: ProfessionalProfile[] = [
  {
    id: "f4b3ad70-3d4a-4f1e-b613-35283b8b67f1",
    nome: "Dra. Camila Nogueira",
    email: "camila.nogueira@gmail.com",
    bio: "Dermatologista especializada em rejuvenescimento facial e protocolos minimamente invasivos.",
    endereco: "Rua Oscar Freire, 1120 • São Paulo/SP",
    avatarUrl: "/placeholder.svg",
    duracaoPadrao: "60",
    availability: {
      "60": {
        [createDateKey(1)]: createDayAvailability(["09:00", "10:30", "14:30"], ["10:30"]),
        [createDateKey(4)]: createDayAvailability(["08:30", "10:00", "15:00"]),
        [createDateKey(7)]: createDayAvailability(["09:30", "11:00", "16:00"], ["11:00"]),
      },
      "30": {
        [createDateKey(1)]: createDayAvailability(["09:00", "09:45", "10:30", "11:15", "15:00"], ["09:45"]),
        [createDateKey(3)]: createDayAvailability(["08:30", "09:15", "10:00", "10:45", "11:30"], ["10:45"]),
        [createDateKey(6)]: createDayAvailability(["13:00", "13:45", "14:30", "15:15"], ["13:45"]),
      },
    },
  },
  {
    id: "0fbb9e8d-cc12-4b3c-8d80-8a93bd2c3ab4",
    nome: "Coach Pedro Azevedo",
    email: "pedro.azevedo@gmail.com",
    bio: "Coach de carreira focado em transições para liderança e desenvolvimento de soft skills.",
    endereco: "Av. das Nações Unidas, 14261 • São Paulo/SP",
    avatarUrl: "/placeholder.svg",
    duracaoPadrao: "30",
    availability: {
      "30": {
        [createDateKey(2)]: createDayAvailability(["07:30", "08:15", "09:00", "09:45", "10:30"], ["09:45"]),
        [createDateKey(5)]: createDayAvailability(["08:00", "08:45", "09:30", "10:15", "11:00"], ["10:15"]),
        [createDateKey(8)]: createDayAvailability(["14:00", "14:45", "15:30", "16:15"], ["15:30"]),
      },
      "60": {
        [createDateKey(2)]: createDayAvailability(["08:00", "09:15", "11:00", "14:00"], ["09:15"]),
        [createDateKey(6)]: createDayAvailability(["09:00", "10:30", "13:00"], ["10:30"]),
      },
    },
  },
  {
    id: "1d0339a9-95d0-4b6a-bf37-928b05c4c092",
    nome: "Arq. Sofia Martins",
    email: "sofia.martins@gmail.com",
    bio: "Arquiteta especialista em interiores residenciais com foco em espaços funcionais e sustentáveis.",
    endereco: "Rua Iaiá, 340 • São Paulo/SP",
    avatarUrl: "/placeholder.svg",
    duracaoPadrao: "60",
    availability: {
      "60": {
        [createDateKey(3)]: createDayAvailability(["10:00", "11:30", "15:30"], ["11:30"]),
        [createDateKey(9)]: createDayAvailability(["09:00", "10:30", "14:30"], ["14:30"]),
      },
      "30": {
        [createDateKey(3)]: createDayAvailability(["09:30", "10:15", "11:00", "14:00"], ["10:15"]),
        [createDateKey(9)]: createDayAvailability(["08:45", "09:30", "10:15", "13:30", "14:15"], ["13:30"]),
      },
    },
  },
  {
    id: "3ab3b0f6-4e10-4cc2-9fd4-74f2bda1f5b1",
    nome: "Chef Helena Paiva",
    email: "helena.paiva@gmail.com",
    bio: "Consultora gastronômica para restaurantes autorais e experiência culinária sazonal.",
    endereco: "Rua Borges Lagoa, 732 • São Paulo/SP",
    avatarUrl: "/placeholder.svg",
    duracaoPadrao: "30",
    availability: {
      "30": {
        [createDateKey(4)]: createDayAvailability(["16:00", "16:45", "17:30", "18:15"], ["17:30"]),
        [createDateKey(10)]: createDayAvailability(["15:00", "15:45", "16:30", "17:15"], ["15:45"]),
      },
      "60": {
        [createDateKey(4)]: createDayAvailability(["16:00", "17:15", "18:30"], ["17:15"]),
        [createDateKey(10)]: createDayAvailability(["15:00", "16:30", "18:00"], ["16:30"]),
      },
    },
  },
  {
    id: "58e46858-3f52-4a35-a95d-e7311b4234cf",
    nome: "Dr. Vinícius Sampaio",
    email: "vinicius.sampaio@gmail.com",
    bio: "Fisioterapeuta esportivo com foco em reabilitação acelerada para atletas amadores.",
    endereco: "Av. Brigadeiro Faria Lima, 3900 • São Paulo/SP",
    avatarUrl: "/placeholder.svg",
    duracaoPadrao: "60",
    availability: {
      "60": {
        [createDateKey(5)]: createDayAvailability(["07:00", "08:30", "10:00", "15:00"], ["08:30"]),
        [createDateKey(11)]: createDayAvailability(["09:00", "10:30", "12:00", "16:00"], ["10:30"]),
      },
      "30": {
        [createDateKey(5)]: createDayAvailability(["07:00", "07:45", "08:30", "10:00", "10:45"], ["08:30"]),
        [createDateKey(8)]: createDayAvailability(["09:00", "09:45", "10:30", "11:15", "13:00"], ["11:15"]),
      },
    },
  },
];

const PROFESSIONAL_MAP = new Map(PROFESSIONALS.map((profile) => [profile.id, profile]));
const PROFESSIONAL_EMAIL_MAP = new Map(PROFESSIONALS.map((profile) => [profile.email.toLowerCase(), profile]));
const DURATION_PRIORITY: DurationOption[] = ["60", "30"];

const SCHEDULES: Record<string, Record<string, ScheduledEvent[]>> = {
  "f4b3ad70-3d4a-4f1e-b613-35283b8b67f1": {
    [createDateKey(0)]: [
      createEvent("camila-1", "Consulta dermatológica", "09:00", "60", "Mariana Lopes"),
      createEvent("camila-2", "Procedimento: peeling", "11:00", "60", "Carla Dias"),
      createEvent("camila-3", "Retorno clínico", "16:00", "30", "Daniel Batista"),
    ],
    [createDateKey(1)]: [
      createEvent("camila-4", "Avaliação inicial", "09:00", "60", "Evelyn Castro"),
      createEvent("camila-5", "Consulta telemedicina", "14:30", "30", "Giovana Prado"),
    ],
  },
  "0fbb9e8d-cc12-4b3c-8d80-8a93bd2c3ab4": {
    [createDateKey(0)]: [
      createEvent("pedro-1", "Mentoria: plano de carreira", "08:00", "60", "Lucas Farias"),
      createEvent("pedro-2", "Sessão coaching executivo", "10:30", "60", "Bruna Freire"),
      createEvent("pedro-3", "Feedback pós-promoção", "15:00", "30", "Henrique Souza"),
    ],
    [createDateKey(2)]: [
      createEvent("pedro-4", "Workshop de liderança", "09:00", "60", "Time Nubia"),
    ],
  },
  "1d0339a9-95d0-4b6a-bf37-928b05c4c092": {
    [createDateKey(0)]: [
      createEvent("sofia-1", "Reunião briefing apartamento", "10:00", "60", "Família Costa", "Escritório"),
      createEvent("sofia-2", "Apresentação layout", "14:00", "60", "Camila Ramos", "Online"),
    ],
    [createDateKey(3)]: [
      createEvent("sofia-3", "Visita técnica", "09:30", "60", "Obra Moema", "On-site"),
    ],
  },
  "3ab3b0f6-4e10-4cc2-9fd4-74f2bda1f5b1": {
    [createDateKey(0)]: [
      createEvent("helena-1", "Revisão cardápio sazonal", "16:00", "60", "Rest. Casa Verde", "Restaurante"),
      createEvent("helena-2", "Consultoria operação", "18:30", "30", "Bistrô Tartufo", "Online"),
    ],
    [createDateKey(4)]: [
      createEvent("helena-3", "Treinamento de equipe", "15:00", "60", "Equipe La Cocina", "Restaurante"),
    ],
  },
  "58e46858-3f52-4a35-a95d-e7311b4234cf": {
    [createDateKey(0)]: [
      createEvent("vinicius-1", "Avaliação pós-lesão", "07:00", "60", "João Victor", "Clínica"),
      createEvent("vinicius-2", "Sessão de reabilitação", "09:00", "60", "Amanda Silva", "Clínica"),
      createEvent("vinicius-3", "Treino funcional", "15:00", "30", "Equipe RunSP", "Academia"),
    ],
    [createDateKey(5)]: [
      createEvent("vinicius-4", "Acompanhamento semanal", "09:00", "60", "Pedro Lourenço", "Clínica"),
    ],
  },
};

const isDurationOption = (value: unknown): value is DurationOption => value === "30" || value === "60";

const firstAvailableDuration = (profile: ProfessionalProfile): DurationOption =>
  (DURATION_PRIORITY.find((duration) => Object.keys(profile.availability[duration] ?? {}).length > 0) ??
    profile.duracaoPadrao) as DurationOption;

export const resolveDurationForProfessional = (profile: ProfessionalProfile, durationParam?: string | null): DurationOption => {
  const candidate = isDurationOption(durationParam) ? durationParam : undefined;
  if (candidate && Object.keys(profile.availability[candidate] ?? {}).length > 0) {
    return candidate;
  }

  if (Object.keys(profile.availability[profile.duracaoPadrao] ?? {}).length > 0) {
    return profile.duracaoPadrao;
  }

  return firstAvailableDuration(profile);
};

export const listProfessionals = () => PROFESSIONALS;
export const listProfessionalPublicInfo = (): ProfessionalPublicInfo[] =>
  PROFESSIONALS.map(({ id, nome, email, avatarUrl, duracaoPadrao }) => ({ id, nome, email, avatarUrl, duracaoPadrao }));

export const getProfessionalById = (id?: string | null): ProfessionalProfile | null => (id ? PROFESSIONAL_MAP.get(id) ?? null : null);

export const getProfessionalByEmail = (email?: string | null): ProfessionalProfile | null => {
  if (!email) {
    return null;
  }
  return PROFESSIONAL_EMAIL_MAP.get(email.trim().toLowerCase()) ?? null;
};

export const DEFAULT_PROFESSIONAL = PROFESSIONALS[0];
export const DEFAULT_PROFESSIONAL_ID = DEFAULT_PROFESSIONAL.id;

export const formatDateKey = (date: Date) => format(date, DATE_KEY_FORMAT);

export const formatDatePtBR = (date: Date) => format(date, "eeee, d 'de' MMMM", { locale: ptBR });

export const formatTimeRange = (slot: string, duration: DurationOption) => {
  const [hours, minutes] = slot.split(":").map(Number);
  const start = new Date();
  start.setHours(hours, minutes, 0, 0);

  const end = new Date(start.getTime() + Number(duration) * 60 * 1000);

  return `${slot} - ${format(end, "HH:mm")}`;
};

export const getAvailableDates = (professionalId: string, duration: DurationOption): Date[] => {
  const profile = getProfessionalById(professionalId);
  if (!profile) {
    return [];
  }

  const durationKey = resolveDurationForProfessional(profile, duration);
  const availability = profile.availability[durationKey] ?? {};

  return Object.keys(availability)
    .map((iso) => parseISO(iso))
    .sort((a, b) => a.getTime() - b.getTime());
};

export const getAvailableSlots = (
  professionalId: string,
  duration: DurationOption,
  date: Date | undefined,
): AvailableSlot[] => {
  if (!date) {
    return [];
  }

  const profile = getProfessionalById(professionalId);
  if (!profile) {
    return [];
  }

  const durationKey = resolveDurationForProfessional(profile, duration);
  const availability = profile.availability[durationKey] ?? {};
  const dayAvailability = availability[formatDateKey(date)];

  if (!dayAvailability) {
    return [];
  }

  const blockedSet = new Set(dayAvailability.blocked ?? []);

  return dayAvailability.slots.map((slot) => ({
    value: slot,
    label: `${slot} (${SUPPORTED_DURATIONS[durationKey]})`,
    disabled: blockedSet.has(slot),
  }));
};

export const listProfessionalUrls = (basePath = "/agendar") =>
  PROFESSIONALS.map((profile) => {
    const duration = resolveDurationForProfessional(profile, profile.duracaoPadrao);
    return {
      id: profile.id,
      url: `${basePath}?professionalId=${profile.id}&durationTime=${duration}`,
    };
  });

export const buildSchedulingUrl = (professionalId: string, duration: DurationOption, basePath = "/agendar") =>
  `http://localhost:8080${basePath}?professionalId=${professionalId}&durationTime=${duration}`;

export const getSchedulesForDate = (professionalId: string, date: Date): ScheduledEvent[] => {
  const profileSchedules = SCHEDULES[professionalId];
  if (!profileSchedules) {
    return [];
  }

  const events = profileSchedules[formatDateKey(date)] ?? [];
  return [...events].sort((a, b) => (a.inicio > b.inicio ? 1 : -1));
};

export const PROFESSIONAL_PASSWORD = "123456";

export const authenticateProfessional = (email: string, password: string) => {
  const profile = getProfessionalByEmail(email);
  if (!profile) {
    return null;
  }

  if (password !== PROFESSIONAL_PASSWORD) {
    return null;
  }

  return profile;
};


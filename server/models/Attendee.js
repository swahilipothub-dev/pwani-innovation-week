import mongoose from 'mongoose';
import crypto from 'crypto';

const SUBCOUNTIES = [
  'nyali',
  'mvita',
  'likoni',
  'changamwe',
  'jomvu',
  'kisauni',
  'other'
];

const MANAGEMENT_DEPARTMENTS = [
  'tech',
  'creatives',
  'communications',
  'hr and admin',
  'case management',
  'swahilipotfm',
  'heritage',
  'hospitality',
  'health',
  'youth engagement',
  'campus ambassadors',
  'finance and procurement',
  'internal volunteers',
  'entrepreneurship',
  'events and events management',
  'partnership',
  'executive'
];

const MENTORS = [
  'Joshua Nyongesa',
  'Suad Abdulnassir Said',
  'Catherine Mwololo',
  'Caroline Kageha Saziru',
  'Joshua Sagawa',
  'Cynthia Imali Ambehi',
  'Irene Kadenyi',
  'Mark Ombacho',
  'Hassan Mohammed',
  'Iris Natasha Ayuma',
  'Vivian Edwick Ochieng',
  'Brian Bii kipkoech',
  'Gabriel Mwanzia',
  'Seth Mutie',
  'Maryam Juma',
  'Sally Ageyo Chavanji',
  'Kibibi Riziki',
  'Fatime Suleman',
  'Lilian njeri',
  'Rukia Awor',
  'Susan otieno',
  'Swabrina Mohamed Mapenzi',
  'Abdalla shuaib',
  'Alphonse Odhiambo',
  'Omar Mctito Ndegwa',
  'Mwanaharusi Juma',
  'Abubakar Mohamed',
  'Fatuma Mohamed',
  'Dorcas Mutemi',
  'Rahma Nuhu',
  'Kulthum Mohamed',
  'Wilfred Gambo',
  'Khalid Ali',
  'Rahma Nelima Salim',
  'Chiro Tunje',
  'Collins Shake',
  'Amida Said',
  'Teddy Nyenze Ndei',
  'Happy mak-osewe',
  'Humphrey Ndurya Chirudi',
  'Athman Rissasi Said',
  'Wycliff Okatch Nyaundo',
  'Salma Salim Hamid',
  'Aisha Juma M\'zani',
  'Frank Dendla',
  'Laki Ali Mwabugu',
  'Maryam Faisal',
  'Tanim Suleiman',
  'Sarah Achola',
  'Linah Mulongo',
  'Juma Ali Mwakaadzango',
  'Aisha Athman Juma',
  'Ramadhan Tanariva',
  'William Swaleh',
  'Bakari Kudoka',
  'Mary Mulunga Mwachiti',
  'Omari Bakari Beya',
  'Hafsa Meali Mwakanyenze',
  'Omar Mazera Ngedzo',
  'Getrude Shiyuka',
  'Halima Hamisi Kingi',
  'Mumba Masudi Bomu',
  'Salma Ali Abdallah',
  'Erick Simon',
  'Josephine kivendi',
  'Hassan kalama',
  'Lilian juma',
  'Amos wangige',
  'Frascisca Okoth',
  'Charity Khavakaluha',
  'Faith Kambua',
  'Priscah Kimani',
  'Shamim Hadazah',
  'Maimuna Mohammed',
  'Diana Awuor',
  'Ali Abdallah Ali',
  'Vigilance Shighi Msiko',
  'Elvis Mdari Mwaivu',
  'Nuru Juma',
  'Saadia mohamed',
  'Doctor Ogallo',
  'Amina kassim',
  'Zipporah njoki',
  'Omar faissally',
  'Sharon kabibi',
  'Erick Lenjo',
  'Rozina Njeri Mtua',
  'Mwanamgeni Suleiman',
  'Pauline Akuku Okoya',
  'Zainab Maganga',
  'Steven Odami',
  'Ian Mgainga',
  'Ahlam Wahid Ahmed',
  'Collins Raria',
  'Fatma Yahya',
  'Khadija Riziki Amani',
  'Kriss Ford',
  'Firdaus Ahmed',
  'Zainab Bilal',
  'Prize Unda Riziki',
  'Umi Sadik Shee',
  'Nuru Mahmoud',
  'Owen Odhiambo',
  'Ummi Said Omar',
  'Amina Hassan',
  'Emelda Okulu',
  'Asya Ahmed',
  'Vumbi Ali',
  'Others'
];

const COHORTS = [
  'cohort 2',
  'cohort 3',
  'cohort 4'
];

const generateCode = (prefix) =>
  `${prefix}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;

function baseSchema(extraFields, codePrefix) {
  const schema = new mongoose.Schema(
    {
      first_name: { type: String, required: true, trim: true },
      middle_name: { type: String, trim: true },
      last_name: { type: String, required: true, trim: true },
      phone_number: { type: String, required: true, unique: true, trim: true },
      email: { type: String, required: true, unique: true, lowercase: true, trim: true },
      subcounty: { type: String, enum: SUBCOUNTIES, required: true },
      gender: { type: String, enum: ['male', 'female'], required: true },
      code: { type: String, unique: true, index: true },
      ...extraFields
    },
    { timestamps: true }
  );

  schema.pre('save', async function assignCode(next) {
    if (this.code) return next();

    try {
      let code;
      let exists = true;
      while (exists) {
        code = generateCode(codePrefix);
        const Model = mongoose.models[this.constructor.modelName];
        exists = await Model.exists({ code });
      }
      this.code = code;
      next();
    } catch (err) {
      next(err);
    }
  });

  return schema;
}

const ManagementSchema = baseSchema(
  {
    department: { type: String, enum: MANAGEMENT_DEPARTMENTS, required: true }
  },
  'MGMT'
);

const VolunteerSchema = baseSchema(
  {
    id_number: { type: String, required: true, unique: true, trim: true }
  },
  'VOL'
);

const MenteeSchema = baseSchema(
  {
    mentor: { type: String, enum: MENTORS, required: true },
    cohort: { type: String, enum: COHORTS, required: true }
  },
  'MNT'
);

const SpeakerSchema = baseSchema({}, 'SPK');

const DelegateSchema = baseSchema(
  {
    title: { type: String, trim: true },
    organization: { type: String, trim: true }
  },
  'DLG'
);

export const ManagementAttendee =
  mongoose.models.ManagementAttendee ||
  mongoose.model('ManagementAttendee', ManagementSchema);

export const VolunteerAttendee =
  mongoose.models.VolunteerAttendee ||
  mongoose.model('VolunteerAttendee', VolunteerSchema);

export const MenteeAttendee =
  mongoose.models.MenteeAttendee ||
  mongoose.model('MenteeAttendee', MenteeSchema);

export const SpeakerAttendee =
  mongoose.models.SpeakerAttendee ||
  mongoose.model('SpeakerAttendee', SpeakerSchema);

export const DelegateAttendee =
  mongoose.models.DelegateAttendee ||
  mongoose.model('DelegateAttendee', DelegateSchema);

export const ATTENDEE_CONSTANTS = {
  SUBCOUNTIES,
  MANAGEMENT_DEPARTMENTS,
  MENTORS,
  COHORTS
};

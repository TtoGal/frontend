import {GenderType, JobStatus} from '@type/api/auth';

const JOB_MAPPING: {status: JobStatus; label: string; icon: string}[] = [
  {status: 'STUDENT', label: '학생', icon: '📚'},
  {status: 'EMPLOYEE', label: '직장인', icon: '💼'},
  {status: 'FREELANCER', label: '프리랜서', icon: '👩🏻‍💻'},
  {status: 'JOB_SEEKING', label: '구직 중', icon: '🔎'},
  {status: 'ENTREPRENEUR', label: '사업가', icon: '🏪'},
  {status: 'ON_LEAVE', label: '휴직 중', icon: '🏖️'},
  {status: 'OTHERS', label: '기타', icon: '➰'},
];

const GENDER_MAPPING: {type: GenderType; label: string; icon: string}[] = [
  {type: 'MAN', label: '남자', icon: '👩🏻'},
  {type: 'FEMALE', label: '여자', icon: '🧑🏻'},
];

export {JOB_MAPPING, GENDER_MAPPING};

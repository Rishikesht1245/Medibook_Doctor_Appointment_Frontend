export const doctors: {
  id: string;
  name: string;
  specialization: string;
  avgRating: number;
  totalRating: number;
  photo: string;
  totalPatients: number;
  hospital: string;
}[] = [
  {
    id: "01",
    name: "Dr. Alfaz Ahmed",
    specialization: "Surgeon",
    avgRating: 4.8,
    totalRating: 232,
    photo:
      "https://res.cloudinary.com/djcn6luvw/image/upload/v1694082307/Medibook/doctor-img03_vhsump.png",
    totalPatients: 1400,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: "02",
    name: "Dr. Saleh Mahmud",
    specialization: "Neurologist",
    avgRating: 4.6,
    totalRating: 272,
    photo:
      "https://res.cloudinary.com/djcn6luvw/image/upload/v1694082309/Medibook/doctor-img01_kkv1zx.png",
    totalPatients: 1200,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
  {
    id: "03",
    name: "Dr. Farid Uddin",
    specialization: "Dermatologist",
    avgRating: 4.7,
    totalRating: 202,
    photo:
      "https://res.cloudinary.com/djcn6luvw/image/upload/v1694082308/Medibook/doctor-img02_ejnkl7.png",
    totalPatients: 1000,
    hospital: "Mount Adora Hospital, Sylhet.",
  },
];

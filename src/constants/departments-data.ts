type MemberType = {
  name: string;
  images: string[];
};

type DepartmentType = {
  title: string;
  description: string;
  logo: string;
  group: string;
  members: MemberType[];
};

type DepartmentsType = {
  [key: string]: DepartmentType;
};

const DEPARTMENTS_DATA: DepartmentsType = {
  auditor: {
    title: 'Auditor',
    description:
      'AUDIT INTERNAL adalah departemen yang berperan sebagai pemeriksa laporan keuangan dan kepatuhan terhadap kebijakan yang mengikat HIMAPROSIF, serta sebagai penasehat tata kelola dan manajemen resiko untuk perkembangan HIMAPROSIF.',
    logo: '1NERUOy0qpRfcecMMOV1CUJrVk0R1suRO',
    group: '1kZYvIx94XaO9rDQ-b-QPUqiZ7pi91e9b',
    members: [
      {
        name: 'I. Dikmanta Putra',
        images: ['17yCFFriHo4y6zaBJaXDfCiodrGP1WDZa', '1iWoBp_GeFDcuTs_N0Q0cYQ_k0EScym2g'],
      },
      {
        name: 'Zahra Nur F.',
        images: ['1bRRmPizW84Pp2dltI3hOijP9Xu7_SJIK', '1-T_zldBUp1bxeaawUKwmRlOJThofEqYS'],
      },
    ],
  },
  bpi: {
    title: 'Badan Pengurus Inti',
    description: 'BADAN PENGURUS INTI Merupakan Badan yang bertanggung jawab mengatur secara utama dan meyeluruh terkait kinerja kepengurusan juga mengkoordinasi dan mengembangkan kabinet',
    logo: '1niqkHOwB25PqQz-Vd7hCrJXbl2fdn1UJ',
    group: '1h-Dvc_U1b4Mbq6lqe_L0w20W7LVTiqs2',
    members: [
      {
        name: 'Wahyu Cahya Dwi M.',
        images: ['16UtqFa6kI5WjdR-6jq_uED4kyRTAT1ir', '1sD3_W45POgWPuEbXYXIDqx4Uc5lDRpN3'],
      },
      {
        name: 'Putri Roro Andini',
        images: ['1WisGsUy60NVA5Wd5ViPrL94-8WhIpaS5', '1id_vxCSEyXefxfEJx-cukAERe9Yez7aS'],
      },
      {
        name: 'Charisa Najma',
        images: ['1xXGa17ysPSA36Xpeq4dCiO7vuLCJRqDK', '1AWs4hMWV-Wy037hTwL-1XzqC5BMXxKhf'],
      },
      {
        name: 'Adhiana Afida R.',
        images: ['1fDAnVbMwSZnTFKlkxvJ2XxIzpmV0MzCK', '1jupdsnMmfd1lNmXQ8JQln8vEmOzxvkxt'],
      },
      {
        name: 'Marsha Alifia V.',
        images: ['1SvLnmkqsdpWINrmm081Nvn0JEMSEI9xZ', '1DgvY0ZktWoQ6pdgHbxWRzTBnNcJK6nBI'],
      },
      {
        name: 'Rini Fatmawati',
        images: ['1YDVh5ALfAZFl4xlj1QkWriILc1_B1Faz', '1DhEjnxba6Z2HiHQR8JPet-X6NcsO9tdX'],
      },
    ],
  },
  humas: {
    title: 'Hubungan Masyarakat',
    description: 'HUBUNGAN MASYARAKAT adalah departemen yang berperan dalam mewujudkan pelayanan informasi publik yang akuntabel, efektif dan efisien',
    logo: '1iiOopM-r6rfwFQTj3EXhhquACTq4Hiks',
    group: '1Exq9eOE4-G1ETAEoOyq8ahi7zlD89cKU',
    members: [
      { name: 'Salwa Faizah', images: ['', ''] },
      { name: 'Sagita Suryani A.', images: ['', ''] },
      { name: 'Oryza Sativa N.', images: ['', ''] },
      { name: 'M. Sultan Mahir F.', images: ['', ''] },
      { name: 'Febrisari Aulia', images: ['', ''] },
      { name: 'A. Syakirah Wibowo', images: ['', ''] },
      { name: 'Aina Nur Illah', images: ['', ''] },
    ],
  },
  msdm: {
    title: 'Manajemen Sumber Daya Manusia',
    description: 'MANAJEMEN SUMBER DAYA MANUSIA adalah departemen yang berperan dalam terwujudnya mahasiswa sistem informasi yang berkarakter dan berprestasi baik akademik maupun non akademik.',
    logo: '12Dt51eQAOuxd2xfHkPi88NQq3rXL8zV2',
    group: '1tqhpcVldz5PnPTuA5W1ogvbA2BmKB9Sn',
    members: [
      { name: 'Awanda Fitya Z.', images: ['', ''] },
      { name: 'R. Cahya Fitonah', images: ['', ''] },
      { name: 'Miranda P. I.', images: ['', ''] },
      { name: 'Makrifah T. S.', images: ['', ''] },
      { name: 'Nurul Ilmiyah', images: ['', ''] },
      { name: 'M. Hasnan AL A.', images: ['', ''] },
      { name: 'M. Syaifuddin C. K.', images: ['', ''] },
      { name: 'Arimbi', images: ['', ''] },
      { name: 'A. Fajar Al Amin', images: ['', ''] },
      { name: 'Adelia Fathir', images: ['', ''] },
    ],
  },
  kki: {
    title: 'Kerohanian dan Keagamaan Islam',
    description:
      'KKI adalah departemen yang berperan meningkatkan kualitas SPIRITUAL ISLAM yang mengintegrasikan nilai-nilai keagamaan islam serta menjadi wadah diskusi dari mahasiswa sistem informasi',
    logo: '1pECAlCluYutsO1OqwN__Ycj5GMquWkX5',
    group: '1Q19J5dkRuGEqRakWB7xy1hzh3lOkJvPU',
    members: [
      { name: 'Ina Nurmadina', images: ['', ''] },
      { name: 'M. Nidzom Imtiyaz', images: ['', ''] },
      { name: 'Irfan Daffayudha', images: ['', ''] },
      { name: 'Fernanda Widyadhana Tsaqif', images: ['', ''] },
      { name: 'M. Farhan Maheswara', images: ['', ''] },
      { name: 'Aulia Fatiha Sari', images: ['', ''] },
      { name: 'Anjang Qismatul Islam', images: ['', ''] },
    ],
  },
  pmdb: {
    title: 'Pengembangan Minat dan Bakat',
    description: 'PENGEMBANGAN MINAT DAN BAKAT adalah departemen yang berperan menjaring aspirasi dan mewadahi minat dan bakat mahasiswa prodi Sistem Informasi UINSA',
    logo: '1AgdQR3b3JVebcpUI1y8iENr76nJnc_n4',
    group: '1Kc77h5jRtY1N6DPImsNb1zWo77-iq3Z6',
    members: [
      { name: 'Wildan Mufti M.', images: ['', ''] },
      { name: 'Maulana Sulistio S.', images: ['', ''] },
      { name: 'Sikha Adelia M.', images: ['', ''] },
      { name: 'Afreza Restu F.', images: ['', ''] },
      { name: 'Davin Ramadha', images: ['', ''] },
      { name: 'Cakra Andreas', images: ['', ''] },
      { name: 'A. Aldi Bagus P.', images: ['', ''] },
      { name: 'Ade Erhan N.', images: ['', ''] },
    ],
  },
  pa: {
    title: 'Pengembangan Akademik',
    description:
      'PENGEMBANGAN AKADEMIK adalah departemen yang berperan untuk meningkatkan mutu pendidikan dan pengalaman akademik para mahasiswa, memberikan dukungan kepada mahasiswa dalam mencapai keberhasilan akademis.',
    logo: '1mxXToOQdvx9Lc1yORpppl4nYeNYKFBtA',
    group: '11ZZhnPmTCfHoISfu018kCsM63NgqoTmQ',
    members: [
      { name: 'Safriya Murni P.', images: ['', ''] },
      { name: 'Rochmah Septiana', images: ['', ''] },
      { name: 'Siti Qomariah', images: ['', ''] },
      { name: 'Rakha Safa P. S.', images: ['', ''] },
      { name: 'M. Abdullah Azzam', images: ['', ''] },
      { name: 'Fauzia Eka M.', images: ['', ''] },
      { name: 'Evva Choirotul Mahfazza', images: ['', ''] },
    ],
  },
  ti: {
    title: 'Teknologi Informasi',
    description: 'TEKNOLOGI INFORMASI adalah departemen yang berperan dalam mengelola dan memberikan informasi serta mengkomunikasikan kegiatan ke dalam bentuk kreatif desain dan video.',
    logo: '1VY63ToMmFNZe1yE2iwXitGYXQkfVe-0f',
    group: '15PikTRFaEelS65ETp-ks9HB4m4JMDhoV',
    members: [
      { name: 'Shofyyah Salsabila F.', images: ['', ''] },
      { name: 'Rico Rahmat H.', images: ['', ''] },
      { name: 'Reta', images: ['', ''] },
      { name: 'Ageng Putra Pratama', images: ['', ''] },
      { name: 'Achmad Raihan', images: ['', ''] },
      { name: 'Ahmad Ghozi D.', images: ['', ''] },
      { name: 'Ela', images: ['', ''] },
      { name: 'Careen Emilza N.', images: ['', ''] },
      { name: 'Ahmad Bintang A. S.', images: ['', ''] },
      { name: 'U. Abdul Aziz', images: ['', ''] },
      { name: 'Arum Karunia', images: ['', ''] },
    ],
  },
  pb: {
    title: 'Pengembangan Bisnis',
    description:
      'PENGEMBANGAN BISNIS adalah departemen yang bertanggung jawab dalam dana kemandirian HIMAPROSIF dan menjadi pondasi finansial untuk HIMAPROSIF. Serta, mengembangkan kemampuan berbisnis.',
    logo: '1Jo52CQtZJua-ckbrXgLcvwKcjgJZiZzo',
    group: '1wt0grzfjR_WSXQPEbydsuDnA869M3GmJ',
    members: [
      { name: 'Azzam Wildan S. A.', images: ['', ''] },
      { name: 'Fauziah Afrisa N.', images: ['', ''] },
      { name: 'Ervina Anggraeni', images: ['', ''] },
      { name: 'Dzaky Agustia C. A.', images: ['', ''] },
      { name: 'Diana Silva S.', images: ['', ''] },
      { name: 'Defi', images: ['', ''] },
      { name: 'Ailsa Aurellia', images: ['', ''] },
    ],
  },
};

export { type DepartmentType, DEPARTMENTS_DATA };

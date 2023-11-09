import React from 'react';
import { fetchHygraphQuery } from '@/utils/fetch-hygraph-query';
import { BioPageInfo } from '@/types/page-info';  // Certifique-se de importar o tipo correto
import BioComponents from '@/components/Bio';

const getPageData = async (): Promise<BioPageInfo> => {  // Ajuste o tipo aqui
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
      }
    }
  `;

  return fetchHygraphQuery(query);
};

const Bio = ({ pageData }: { pageData: BioPageInfo }) => {  // Ajuste o tipo aqui

  return (
    <>
      <BioComponents bioInfo={pageData}/>
    </>
  );
};

export async function getServerSideProps() {
  const response = await getPageData();

  return { props: { response } };
}

export default Bio;

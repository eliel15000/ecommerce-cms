"use client";

import { useParams } from "next/navigation";

import { useOrigin } from "@/hooks/use-origin";
import { ApiAlert } from "@/components/ui/api-alert";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

const ApiList: React.FC<ApiListProps> = ({
  entityName,
  entityIdName
}) => {

  const params = useParams();
  const origin = useOrigin();

  const basedUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        title="GET"
        description={`${basedUrl}/${entityName}`}
        variant="public"
      />
      <ApiAlert
        title="GET"
        description={`${basedUrl}/${entityName}/{${entityIdName}}`}
        variant="public"
      />
      <ApiAlert
        title="POST"
        description={`${basedUrl}/${entityName}`}
        variant="admin"
      />
      <ApiAlert
        title="PATCH"
        description={`${basedUrl}/${entityName}/{${entityIdName}}`}
        variant="admin"
      />
      <ApiAlert
        title="DELETE"
        description={`${basedUrl}/${entityName}/{${entityIdName}}`}
        variant="admin"
      />
    </>
  );
};

export default ApiList;
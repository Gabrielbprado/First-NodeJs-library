function ExtrairList(list)
{
    return list.map((Objectlinks) => Object.values(Objectlinks).join());
}

export default async function GetListUrl(lists)
{
    
    const links =  ExtrairList(lists);
    const status =  await ValidaUrl(links);
    return status
}

async function ValidaUrl(ArrayUrl)
{
    const ArrayPending = await Promise.all
    (
        ArrayUrl.map(async (url) =>
        {
            const response = await fetch(url);
            return response.status;
        })
    )
    return ArrayPending;
    
   
}





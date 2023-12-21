function ExtrairList(list)
{
    return list.map((Objectlinks) => Object.values(Objectlinks).join());
}

export default function valida(lists)
{
    return ExtrairList(lists);
}



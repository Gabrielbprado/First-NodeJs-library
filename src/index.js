import chalk from 'chalk';
import fs from 'fs';


function GetLink(text)
{
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const file = [...text.matchAll(regex)];
    const links = file.map(file => ({[file[1]] : file[2]}));
    links.forEach((element) => {
        console.log(element);    
    });
    
}

function TrataErro(error)
{
    console.log(chalk.red("Ocorreu um erro:",error.code));
}

async function GetFile(path)
{
    try
    { 
    const encoding = 'utf-8';
       const text = await fs.promises.readFile(path,encoding);
       return GetLink(text);
    }catch (error)
    {
        TrataErro(error);
    }
}
export default GetFile();
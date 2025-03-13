export const removeLastAndFirstLine = (str : string | null | undefined) : string => {
    if(!str){
        return ""
    }
    const lines = str.split('\n');
    if (lines.length <= 1) {
      return "";
    }
    lines.shift();
    lines.pop();
    return lines.join('\n');
} 
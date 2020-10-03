using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class VotoValor
    {
        public byte[] IdVotoValor { get; set; }
        public string Descricao { get; set; }
        public DateTimeOffset DtInc { get; set; }
        public DateTimeOffset DtAlt { get; set; }
    }
}

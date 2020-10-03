using System;
using System.Collections.Generic;

namespace Persistence
{
    public partial class TipoModeracao
    {
        public byte[] IdTipoModeracao { get; set; }
        public string Titulo { get; set; }
        public string Descricao { get; set; }
        public DateTimeOffset DtInc { get; set; }
        public DateTimeOffset DtAlt { get; set; }
    }
}

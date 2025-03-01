SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[product](
	[pid] [int] NOT NULL,
	[pname] [varchar](100) NOT NULL,
	[pqty] [int] NOT NULL,
	[pprice] [decimal](18, 0) NOT NULL,
	[subcid] [int] NOT NULL,
	[pimage] [varbinary](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[pid] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[product]  WITH CHECK ADD FOREIGN KEY([subcid])
REFERENCES [dbo].[subcategory] ([subcid])
GO


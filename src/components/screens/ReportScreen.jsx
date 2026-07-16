import { ChevronLeft, Download } from 'lucide-react';

const summary = [
  ['Total Shots', '26'],
  ['Total Dose', '36.9 mg'],
  ['Average Dose', '1.4 mg'],
  ['Average Pain Level', '2.1/10'],
  ['Shots with Pain', '21 (81%)'],
];

const sites = [
  ['Stomach – Upper Right', '4 (15%)'],
  ['Stomach – Upper Left', '4 (15%)'],
  ['Upper Arm – Right', '3 (12%)'],
];

const history = [
  ['Jan 19, 2026', 'Ozempic®', '0.5mg', 'Stomach'],
  ['Jan 26, 2026', 'Ozempic®', '0.5mg', 'Stomach'],
  ['Feb 02, 2026', 'Ozempic®', '0.5mg', 'Stomach'],
  ['Feb 09, 2026', 'Ozempic®', '0.5mg', 'Stomach'],
  ['Feb 16, 2026', 'Ozempic®', '0.5mg', 'Thigh —'],
  ['Mar 02, 2026', 'Ozempic®', '1.0mg', 'Stomach'],
  ['Apr 06, 2026', 'Ozempic®', '1.0mg', 'Upper A'],
  ['May 11, 2026', 'Ozempic®', '2.5mg', 'Stomach'],
  ['Jun 15, 2026', 'Ozempic®', '2.5mg', 'Thigh —'],
  ['Jun 29, 2026', 'Ozempic®', '2.5mg', 'Upper A'],
  ['Jul 13, 2026', 'Ozempic®', '2.5mg', 'Stomach'],
];

function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm">
      {title && <p className="text-xs font-bold text-[#111827] mb-1.5">{title}</p>}
      {children}
    </div>
  );
}

export default function ReportScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex-none grid grid-cols-3 items-center px-4 pt-2 pb-2">
        <button className="flex items-center gap-0.5 text-[#2563EB] text-xs font-medium justify-self-start">
          <ChevronLeft className="w-4 h-4" strokeWidth={2} /> Back
        </button>
        <p className="text-center text-base font-bold text-[#111827]">Report</p>
        <Download className="w-4 h-4 text-[#2563EB] justify-self-end" strokeWidth={1.8} />
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar px-4 pt-1 pb-3">
        <div className="flex flex-col gap-3 lg:scale-[1.30] lg:origin-top lg:w-[76.92%] lg:mx-auto shrink-0">
          <div className="rounded-2xl bg-white border border-[#E5E7EB] p-3 shadow-sm flex items-stretch gap-2.5">
            <div className="w-1 rounded-full bg-[#2563EB]" />
            <div>
              <p className="text-xs font-bold text-[#111827]">GLP-1 Shot History Report</p>
              <p className="text-[10px] text-[#9CA3AF]">Generated on July 15, 2026</p>
              <p className="text-[10px] text-[#9CA3AF]">Range: Jan 19, 2026 – Jul 13, 2026</p>
            </div>
          </div>

          <Card title="Summary">
            {summary.map(([l, v]) => (
              <div key={l} className="flex justify-between py-1 border-b border-[#F3F4F6] last:border-0">
                <span className="text-[10px] text-[#6B7280]">{l}</span>
                <span className="text-[10px] font-semibold text-[#111827]">{v}</span>
              </div>
            ))}
          </Card>

          <Card title="Medications Used">
            <div className="flex justify-between py-1">
              <span className="text-[10px] text-[#6B7280]">Ozempic®</span>
              <span className="text-[10px] font-semibold text-[#111827]">26 (100%)</span>
            </div>
          </Card>

          <Card title="Top Injection Sites">
            {sites.map(([l, v]) => (
              <div key={l} className="flex justify-between py-1 border-b border-[#F3F4F6] last:border-0">
                <span className="text-[10px] text-[#6B7280]">{l}</span>
                <span className="text-[10px] font-semibold text-[#111827]">{v}</span>
              </div>
            ))}
          </Card>

          <Card title="Detailed Shot History">
            <div className="grid grid-cols-[1.4fr_1fr_0.7fr_0.9fr] gap-1 pb-1.5 border-b border-[#F3F4F6]">
              <span className="text-[8px] font-semibold text-[#6B7280]">Date</span>
              <span className="text-[8px] font-semibold text-[#6B7280]">Med</span>
              <span className="text-[8px] font-semibold text-[#6B7280]">Dose</span>
              <span className="text-[8px] font-semibold text-[#6B7280]">Site</span>
            </div>
            {history.map((row, i) => (
              <div key={i} className={`grid grid-cols-[1.4fr_1fr_0.7fr_0.9fr] gap-1 py-1 ${i % 2 ? 'bg-[#F9FAFB]' : ''} rounded`}>
                <span className="text-[8px] text-[#374151]">{row[0]}</span>
                <span className="text-[8px] text-[#374151]">{row[1]}</span>
                <span className="text-[8px] text-[#374151]">{row[2]}</span>
                <span className="text-[8px] text-[#374151] truncate">{row[3]}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>

      <div className="flex-none pb-2 pt-1.5 flex justify-center">
        <div className="h-1 w-28 rounded-full bg-black/25" />
      </div>
    </div>
  );
}
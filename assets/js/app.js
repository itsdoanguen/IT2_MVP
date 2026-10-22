/**
 * Student Support Portal - DUT (Trường Đại học Bách khoa - Đại học Đà Nẵng)
 * Main Interactive Controller & Document Preview Engine
 */

// Toast notification helper
function showToast(message, title = 'Thông báo') {
  const toast = document.getElementById('globalToast');
  if (!toast) return;
  
  const titleEl = document.getElementById('toastTitle');
  const msgEl = document.getElementById('toastMessage');
  
  if (titleEl) titleEl.textContent = title;
  if (msgEl) msgEl.textContent = message;
  
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('show'), 10);
  
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 300);
  }, 3500);
}

// Router & Tab Switching
function switchTab(targetTabId, pushState = true) {
  const tabs = ['catalog', 'procedure', 'assistant', 'calendar'];
  if (!tabs.includes(targetTabId)) targetTabId = 'catalog';

  tabs.forEach(tab => {
    const pane = document.getElementById(`tab-${tab}`);
    if (pane) {
      if (tab === targetTabId) {
        pane.classList.add('active');
      } else {
        pane.classList.remove('active');
      }
    }
  });

  // Update Nav links
  document.querySelectorAll('[data-target-tab]').forEach(link => {
    const target = link.getAttribute('data-target-tab');
    if (target === targetTabId) {
      link.classList.remove('text-slate-600', 'hover:bg-slate-100', 'hover:text-slate-900');
      link.classList.add('bg-blue-50', 'text-blue-800', 'font-semibold', 'shadow-xs');
      const icon = link.querySelector('.nav-icon');
      if (icon) icon.classList.add('text-blue-800');
    } else {
      link.classList.remove('bg-blue-50', 'text-blue-800', 'font-semibold', 'shadow-xs');
      link.classList.add('text-slate-600', 'hover:bg-slate-100', 'hover:text-slate-900');
      const icon = link.querySelector('.nav-icon');
      if (icon) icon.classList.remove('text-blue-800');
    }
  });

  if (pushState && window.location.hash !== `#${targetTabId}`) {
    history.pushState(null, '', `#${targetTabId}`);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==================== DOCUMENT PREVIEW MODAL WITH YELLOW HIGHLIGHT ====================
const DOCUMENTS_MAP = {
  qd1414: {
    title: 'Quyết định 1414/QĐ-ĐHBK ngày 24/5/2021',
    subtitle: 'Hiệu trưởng Trường Đại học Bách khoa - Đại học Đà Nẵng ký ban hành',
    pdfUrl: 'tai-lieu-riel/QD_1414_DHBK.pdf',
    fileName: 'QD_1414_DHBK.pdf',
    content: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
        <div class="text-center pb-3 border-b border-slate-200">
          <div class="font-bold text-slate-700 text-xs uppercase tracking-wider">ĐẠI HỌC ĐÀ NẴNG — TRƯỜNG ĐẠI HỌC BÁCH KHOA</div>
          <div class="text-[11px] text-slate-500 mt-0.5">Số: 1414/QĐ-ĐHBK • Đà Nẵng, ngày 24 tháng 5 năm 2021</div>
          <div class="text-sm font-bold text-blue-900 uppercase mt-2">QUY ĐỊNH VỀ VIỆC XÉT, CẤP HỌC BỔNG CHO SINH VIÊN HỆ ĐẠI HỌC CHÍNH QUY</div>
          <div class="text-[11px] italic text-slate-500">(Ban hành kèm theo Quyết định số 1414/QĐ-ĐHBK của Hiệu trưởng)</div>
        </div>

        <!-- Quick Section Jumps -->
        <div class="flex items-center gap-2 p-2 bg-slate-100 rounded-lg text-xs font-semibold">
          <span class="text-slate-500">Xem nhanh điều khoản:</span>
          <a href="#doc-dieu5" class="px-2 py-1 bg-white rounded border border-slate-200 text-blue-800 hover:bg-blue-50">Điều 5: Tiêu chuẩn xét</a>
          <a href="#doc-dieu6" class="px-2 py-1 bg-white rounded border border-slate-200 text-blue-800 hover:bg-blue-50">Điều 6: Mức học bổng A-B-C</a>
          <a href="#doc-dieu7" class="px-2 py-1 bg-white rounded border border-slate-200 text-blue-800 hover:bg-blue-50">Điều 7: Quy trình công bố</a>
        </div>

        <div id="doc-dieu5" class="space-y-2 pt-2">
          <h4 class="font-bold text-slate-900 uppercase text-xs text-blue-950">Chương II: Xét Cấp Học Bổng — Điều 5. Tiêu chuẩn xét học bổng KKHT</h4>
          <p><strong>1. Sinh viên phải đạt đồng thời các tiêu chuẩn sau thì được xét, cấp học bổng KKHT:</strong></p>
          <div class="doc-highlight">
            <strong>a, b) Điểm xét học bổng:</strong> Điểm trung bình chung học tập (ĐTBCHK) được tính từ điểm thi, kiểm tra hết học phần <strong>lần thứ nhất (thang điểm 10)</strong>, làm tròn đến 2 chữ số thập phân.<br/>
            <strong>c) Điểm trung bình chung học kỳ:</strong> Phải đạt từ <strong>7,00 trở lên</strong> (theo thang điểm 10).<br/>
            <strong>d) Điểm rèn luyện:</strong> Phải đạt từ <strong>loại Khá trở lên (≥ 65 điểm)</strong>.<br/>
            <strong>e) Tích lũy tín chỉ:</strong> Phải tích lũy đủ số tín chỉ theo kế hoạch thiết kế.
          </div>
          <p><strong>2. Sinh viên thuộc một trong các trường hợp sau KHÔNG được xét, cấp học bổng KKHT:</strong></p>
          <div class="doc-highlight">
            • Chịu hình thức kỷ luật từ mức <strong>khiển trách trở lên</strong> trong học kỳ xét học bổng.<br/>
            • Có điểm học phần <strong>dưới điểm 5,0</strong> theo thang điểm 10 (tính ở lần thi thứ nhất).<br/>
            • Có tổng số tín chỉ học phần lần đầu của học kỳ lấy điểm xét học bổng <strong>&lt; 15 tín chỉ</strong> (trừ trường hợp theo thiết kế chương trình &lt; 15 tín chỉ hoặc học kỳ làm đồ án tốt nghiệp).
          </div>
        </div>

        <div id="doc-dieu6" class="space-y-2 pt-3 border-t border-slate-200">
          <h4 class="font-bold text-slate-900 uppercase text-xs text-blue-950">Điều 6. Mức học bổng KKHT (3 Loại tương ứng 3 mức)</h4>
          <div class="doc-highlight">
            <strong>1. Học bổng loại Khá (Loại C):</strong> Mức học bổng bằng <strong>100% mức học phí hiện hành</strong> của chương trình đào tạo mà sinh viên phải đóng cho các học phần học lần đầu. Áp dụng cho: ĐTBCHK từ <strong>7,00 đến 7,99</strong> (thang 10) và ĐRL từ <strong>loại Khá trở lên (≥ 65 điểm)</strong>.<br/><br/>
            <strong>2. Học bổng loại Giỏi (Loại B):</strong> Mức học bổng bằng <strong>120% mức học bổng loại Khá (Loại C)</strong>. Áp dụng cho: ĐTBCHK từ <strong>8,00 đến 8,99</strong> (thang 10) và ĐRL từ <strong>loại Tốt trở lên (≥ 80 điểm)</strong>.<br/><br/>
            <strong>3. Học bổng loại Xuất sắc (Loại A):</strong> Mức học bổng bằng <strong>140% mức học bổng loại Khá (Loại C)</strong>. Áp dụng cho: ĐTBCHK đạt <strong>từ 9,00 trở lên</strong> (thang 10) và ĐRL đạt <strong>loại Xuất sắc (≥ 90 điểm)</strong>.
          </div>
        </div>

        <div id="doc-dieu7" class="space-y-2 pt-3 border-t border-slate-200">
          <h4 class="font-bold text-slate-900 uppercase text-xs text-blue-950">Điều 7. Trình tự và nguyên tắc xét, cấp học bổng KKHT</h4>
          <div class="doc-highlight">
            • Học bổng KKHT được xét <strong>2 lần trong một năm học</strong>, vào đầu mỗi học kỳ (HK1 và HK2).<br/>
            • Nhà trường <strong>thống kê danh sách dự kiến</strong> đủ điều kiện xét cấp và thông báo công khai cho toàn thể sinh viên trên cổng <strong>sv.dut.udn.vn</strong> để kiểm tra và phản hồi khiếu nại (thời hạn 5 ngày).<br/>
            • Họp Hội đồng xét cấp học bổng của Trường $\rightarrow$ Hiệu trưởng ký ban hành Quyết định chính thức kèm danh sách được nhận.<br/>
            • Tiền học bổng được chuyển trực tiếp vào tài khoản ngân hàng liên kết sinh viên do Nhà trường cấp.
          </div>
        </div>
      </div>
    `
  },
  vbhn28: {
    title: 'Văn bản hợp nhất số 28/VBHN-BGDĐT',
    subtitle: 'Bộ Giáo dục & Đào tạo — Quy định về học bổng khuyến khích học tập',
    pdfUrl: 'tai-lieu-riel/VBHN_28_BGDDT.pdf',
    fileName: 'VBHN_28_BGDDT.pdf',
    content: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
        <div class="text-center pb-3 border-b border-slate-200">
          <div class="font-bold text-slate-700 text-xs uppercase tracking-wider">BỘ GIÁO DỤC VÀ ĐÀO TẠO</div>
          <div class="text-[11px] text-slate-500 mt-0.5">Văn bản hợp nhất số 28/VBHN-BGDĐT</div>
          <div class="text-sm font-bold text-blue-900 uppercase mt-2">QUY ĐỊNH VỀ HỌC BỔNG KHUYẾN KHÍCH HỌC TẬP TRONG HỆ THỐNG GIÁO DỤC QUỐC DÂN</div>
        </div>

        <div class="space-y-2">
          <h4 class="font-bold text-slate-900 uppercase text-xs text-blue-950">Điều 2: Đối tượng và tiêu chuẩn xét cấp</h4>
          <div class="doc-highlight">
            Học bổng khuyến khích học tập được xét cấp cho học sinh, sinh viên có kết quả học tập và rèn luyện từ <strong>loại khá trở lên</strong>, không bị kỷ luật từ mức khiển trách trở lên trong học kỳ xét học bổng.<br/>
            Quỹ học bổng được bố trí tối thiểu <strong>8% nguồn thu học phí</strong> hệ giáo dục chính quy của nhà trường.
          </div>
        </div>
      </div>
    `
  },
  tt35: {
    title: 'Thông tư số 35/2011/TT-BGDĐT',
    subtitle: 'Bộ Giáo dục & Đào tạo — Quy định về trao và nhận học bổng, trợ cấp',
    pdfUrl: 'tai-lieu-riel/TT_35_2011_BGDDT.pdf',
    fileName: 'TT_35_2011_BGDDT.pdf',
    content: `
      <div class="space-y-4 text-xs sm:text-sm text-slate-800 font-sans leading-relaxed">
        <div class="text-center pb-3 border-b border-slate-200">
          <div class="font-bold text-slate-700 text-xs uppercase tracking-wider">BỘ GIÁO DỤC VÀ ĐÀO TẠO</div>
          <div class="text-[11px] text-slate-500 mt-0.5">Số: 35/2011/TT-BGDĐT • Hà Nội, ngày 11 tháng 8 năm 2011</div>
          <div class="text-sm font-bold text-blue-900 uppercase mt-2">QUY ĐỊNH VỀ TRAO VÀ NHẬN HỌC BỔNG, TRỢ CẤP CHO NGƯỜI HỌC</div>
        </div>

        <div class="space-y-2">
          <h4 class="font-bold text-slate-900 uppercase text-xs text-blue-950">Điều 4: Nguyên tắc trao và nhận học bổng</h4>
          <div class="doc-highlight">
            Việc trao và nhận học bổng, trợ cấp phải đảm bảo <strong>công khai, minh bạch, đúng đối tượng và mục đích</strong>. Nghiêm cấm mọi hành vi giữ lại, trích hoa hồng hoặc vụ lợi từ nguồn học bổng của người học.
          </div>
        </div>
      </div>
    `
  }
};

function openDocPreview(docKey = 'qd1414', targetSection = '') {
  const modal = document.getElementById('documentPreviewModal');
  const titleEl = document.getElementById('previewModalDocTitle');
  const subtitleEl = document.getElementById('previewModalDocSubtitle');
  const bodyEl = document.getElementById('previewModalDocBody');
  const downloadLink = document.getElementById('previewModalDownloadBtn');
  const rawPdfLink = document.getElementById('previewModalRawPdfBtn');

  const doc = DOCUMENTS_MAP[docKey] || DOCUMENTS_MAP.qd1414;

  if (titleEl) titleEl.textContent = doc.title;
  if (subtitleEl) subtitleEl.textContent = doc.subtitle;
  if (bodyEl) bodyEl.innerHTML = doc.content;
  if (downloadLink) {
    downloadLink.href = doc.pdfUrl;
    downloadLink.setAttribute('download', doc.fileName);
  }
  if (rawPdfLink) {
    rawPdfLink.href = doc.pdfUrl;
  }

  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    if (targetSection) {
      setTimeout(() => {
        const targetEl = document.getElementById(`doc-${targetSection}`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }
}

function closeDocPreview() {
  const modal = document.getElementById('documentPreviewModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// ==================== SCREEN 1: CATALOG FILTERS ====================
function initCatalogFilters() {
  const searchInput = document.getElementById('catalogSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const categoryPills = document.querySelectorAll('.cat-pill');
  const cards = document.querySelectorAll('.catalog-card');
  const resultCounter = document.getElementById('catalogResultCount');

  let activeCategory = 'all';

  function filterCards() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    let visibleCount = 0;

    if (clearSearchBtn) {
      clearSearchBtn.style.display = query.length > 0 ? 'inline-flex' : 'none';
    }

    cards.forEach(card => {
      const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
      const cardCategory = card.getAttribute('data-category') || '';
      const cardCode = (card.getAttribute('data-code') || '').toLowerCase();
      const cardDesc = (card.textContent || '').toLowerCase();

      const matchesQuery = query === '' || cardTitle.includes(query) || cardCode.includes(query) || cardDesc.includes(query);
      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;

      if (matchesQuery && matchesCategory) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultCounter) {
      resultCounter.textContent = `${visibleCount} văn bản`;
    }

    const noResultsEl = document.getElementById('noResultsMessage');
    if (noResultsEl) {
      noResultsEl.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', filterCards);
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      filterCards();
      searchInput.focus();
    });
  }

  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => {
        p.classList.remove('bg-blue-800', 'text-white', 'shadow-xs');
        p.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100', 'border-slate-200');
      });
      pill.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100', 'border-slate-200');
      pill.classList.add('bg-blue-800', 'text-white', 'shadow-xs');

      activeCategory = pill.getAttribute('data-category');
      filterCards();
    });
  });

  const resetBtn = document.getElementById('resetCatalogFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      categoryPills[0]?.click();
      filterCards();
    });
  }
}

// ==================== SCREEN 2: STEPPER & APPLICATION ====================
function initProcedureInteractions() {
  const stepCheckboxes = document.querySelectorAll('.step-checker');
  const progressPercentEl = document.getElementById('procedureProgressPercent');
  const progressBarEl = document.getElementById('procedureProgressBar');
  const bookmarkBtn = document.getElementById('btnSaveProcedure');
  const applyModal = document.getElementById('applyProcedureModal');
  const openApplyBtn = document.getElementById('btnOpenApplyModal');
  const closeApplyBtn = document.getElementById('btnCloseApplyModal');
  const submitApplyBtn = document.getElementById('btnConfirmApply');

  function updateProgress() {
    const total = stepCheckboxes.length;
    if (total === 0) return;
    const checked = Array.from(stepCheckboxes).filter(cb => cb.checked).length;
    const pct = Math.round((checked / total) * 100);
    
    if (progressPercentEl) progressPercentEl.textContent = `${pct}%`;
    if (progressBarEl) progressBarEl.style.width = `${pct}%`;
  }

  stepCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      updateProgress();
      if (cb.checked) {
        showToast(`Đã hoàn tất: ${cb.getAttribute('data-step-title')}`, 'Tiến độ hồ sơ DUT');
      }
    });
  });

  if (bookmarkBtn) {
    let saved = false;
    bookmarkBtn.addEventListener('click', () => {
      saved = !saved;
      const icon = bookmarkBtn.querySelector('.material-symbols-outlined');
      const text = bookmarkBtn.querySelector('.btn-text');
      if (saved) {
        bookmarkBtn.classList.add('bg-blue-50', 'text-blue-800', 'border-blue-300');
        if (icon) icon.textContent = 'bookmark';
        if (text) text.textContent = 'Đã lưu hồ sơ';
        showToast('Đã lưu thủ tục học bổng này vào danh mục theo dõi sinh viên DUT!', 'Đã lưu');
      } else {
        bookmarkBtn.classList.remove('bg-blue-50', 'text-blue-800', 'border-blue-300');
        if (icon) icon.textContent = 'bookmark_border';
        if (text) text.textContent = 'Lưu theo dõi';
        showToast('Đã hủy lưu thủ tục khỏi danh mục cá nhân.', 'Thông báo');
      }
    });
  }

  if (openApplyBtn && applyModal) {
    openApplyBtn.addEventListener('click', () => {
      applyModal.classList.remove('hidden');
      applyModal.classList.add('flex');
    });
  }
  if (closeApplyBtn && applyModal) {
    closeApplyBtn.addEventListener('click', () => {
      applyModal.classList.add('hidden');
      applyModal.classList.remove('flex');
    });
  }
  if (submitApplyBtn && applyModal) {
    submitApplyBtn.addEventListener('click', () => {
      applyModal.classList.add('hidden');
      applyModal.classList.remove('flex');
      showToast('Hồ sơ học bổng KKHT (QĐ 1414) đã được chuyển đến Phòng CTSV - Trường ĐHBK Đà Nẵng thành công. Mã biên nhận: DUT-HB-23102', 'Nộp hồ sơ thành công');
    });
  }

  const addCalendarBtn = document.getElementById('btnAddProcedureToCalendar');
  if (addCalendarBtn) {
    addCalendarBtn.addEventListener('click', () => {
      showToast('Đã đồng bộ mốc 30/10 vào Lịch cá nhân sv.dut.udn.vn!', 'Đã thêm sự kiện');
    });
  }
}

// ==================== SCREEN 3: DUT AI ASSISTANT SIMULATOR ====================
function initAIAssistant() {
  const chatMessages = document.getElementById('chatMessagesContainer');
  const chatInput = document.getElementById('aiChatInput');
  const sendBtn = document.getElementById('btnSendAiChat');
  const promptPills = document.querySelectorAll('.prompt-suggestion-pill');
  const clearChatBtn = document.getElementById('btnClearChat');

  const dutKnowledgeBase = [
    {
      keywords: ['học bổng', 'kkht', 'điểm', 'gpa', 'tiêu chuẩn', 'mức học bổng', 'thang 10', 'loại giỏi', 'loại khá', 'loại xuất sắc'],
      title: 'Quy định xét cấp Học bổng KKHT (QĐ 1414/QĐ-ĐHBK)',
      citation: 'Điều 5 & Điều 6 Quyết định 1414/QĐ-ĐHBK (Trường ĐHBK - ĐHĐN)',
      docKey: 'qd1414',
      docSection: 'dieu6',
      content: `Theo <strong>Quyết định số 1414/QĐ-ĐHBK</strong> của Hiệu trưởng Trường Đại học Bách khoa - ĐHĐN:
<br/><br/>
📊 <strong>Tiêu chuẩn điểm (Tính theo Thang điểm 10 lần thi thứ nhất):</strong>
<br/>
• <strong>Loại Xuất sắc (Loại A):</strong> ĐTBCHK từ <strong>9,00 trở lên</strong> & Điểm rèn luyện từ <strong>90 điểm trở lên</strong>. Mức nhận: <strong>140% học bổng Loại Khá</strong>.
<br/>
• <strong>Loại Giỏi (Loại B):</strong> ĐTBCHK từ <strong>8,00 đến 8,99</strong> & Điểm rèn luyện từ <strong>80 điểm trở lên</strong>. Mức nhận: <strong>120% học bổng Loại Khá</strong>.
<br/>
• <strong>Loại Khá (Loại C):</strong> ĐTBCHK từ <strong>7,00 đến 7,99</strong> & Điểm rèn luyện từ <strong>65 điểm trở lên</strong>. Mức nhận: <strong>100% học phí hiện hành</strong>.
<br/><br/>
⚠️ <em>Điều kiện kỹ thuật bắt buộc:</em> Tích lũy tối thiểu <strong>15 tín chỉ học lần đầu</strong> trong học kỳ; không có môn thi lần đầu nào dưới 5,0 điểm; không bị kỷ luật từ mức khiển trách.`
    },
    {
      keywords: ['nghĩa vụ', 'nvqs', 'tạm hoãn', 'giấy xác nhận', 'giấy chứng nhận'],
      title: 'Cấp Giấy chứng nhận tạm hoãn Nghĩa vụ Quân sự tại DUT',
      citation: 'Quy trình Tiếp nhận Một cửa - Phòng CTSV ĐHBK Đà Nẵng',
      docKey: 'tt35',
      docSection: '',
      content: `Thủ tục cấp Giấy chứng nhận sinh viên tạm hoãn NVQS tại Trường ĐH Bách khoa - ĐHĐN:
<br/><br/>
1. Đăng nhập cổng sinh viên: <a href="https://sv.dut.udn.vn/" target="_blank" class="text-blue-700 underline font-semibold">sv.dut.udn.vn</a> $\rightarrow$ Mục <strong>Dịch vụ một cửa sinh viên</strong> $\rightarrow$ Đăng ký cấp Giấy chứng nhận.
<br/>
2. Thời gian xử lý: <strong>02 ngày làm việc</strong>. Nhận bản giấy có đóng dấu đỏ tại <strong>Phòng CTSV (Phòng A104 - Khu A)</strong> hoặc nhận file có chữ ký số điện tử qua email sinh viên (<code>@sv.dut.udn.vn</code>).
<br/>
3. Lệ phí: Hoàn toàn <strong>miễn phí</strong>.`
    },
    {
      keywords: ['rút môn', 'hủy môn', 'hủy học phần', 'thời hạn rút môn'],
      title: 'Quy định rút bớt học phần tại Trường ĐHBK Đà Nẵng',
      citation: 'Quy chế Đào tạo Tín chỉ ĐH Bách khoa - ĐHĐN',
      docKey: 'qd1414',
      docSection: '',
      content: `Quy định rút bớt học phần trong học kỳ tại Trường ĐHBK Đà Nẵng:
<br/><br/>
• <strong>Thời hạn:</strong> Thực hiện trên hệ thống <a href="https://sv.dut.udn.vn/" target="_blank" class="text-blue-700 underline font-semibold">sv.dut.udn.vn</a> trong vòng <strong>04 tuần đầu tiên</strong> của học kỳ chính.
<br/>
• <strong>Số tín chỉ tối thiểu:</strong> Sau khi rút, tổng số tín chỉ đăng ký trong học kỳ không được ít hơn <strong>12 tín chỉ</strong>.
<br/>
• Môn rút nhận điểm 'W' và không hoàn trả học phí.`
    },
    {
      keywords: ['ngoại ngữ', 'toeic', 'vstep', 'chuẩn đầu ra', 'tiếng anh'],
      title: 'Chuẩn ngoại ngữ đầu ra sinh viên DUT',
      citation: 'Quy định Chuẩn đầu ra ĐH Bách khoa - ĐHĐN',
      docKey: 'qd1414',
      docSection: '',
      content: `Chuẩn ngoại ngữ đầu ra áp dụng cho sinh viên chính quy K23 Trường ĐHBK - ĐHĐN:
<br/><br/>
• Sinh viên ngành kỹ thuật/công nghệ: Đạt chứng chỉ <strong>TOEIC 450+</strong> hoặc <strong>VSTEP Bậc 3 (B1)</strong> tương đương.
<br/>
• Sinh viên hệ Chất lượng cao: Yêu cầu <strong>TOEIC 600+</strong> hoặc <strong>VSTEP B2</strong>.
<br/>
• Nộp chứng chỉ đối soát tại Phòng Đào tạo (Khu A) trước khi đăng ký làm đồ án tốt nghiệp.`
    }
  ];

  function appendMessage(sender, htmlContent, meta = null) {
    if (!chatMessages) return;
    const msgWrapper = document.createElement('div');
    msgWrapper.className = `flex gap-3 ${sender === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`;

    if (sender === 'ai') {
      msgWrapper.innerHTML = `
        <div class="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
          DUT
        </div>
        <div class="flex flex-col gap-1.5 max-w-2xl">
          <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs text-slate-800 text-xs sm:text-sm leading-relaxed chat-bubble-ai">
            ${htmlContent}
          </div>
          ${meta ? `
            <div class="flex flex-wrap items-center gap-2 px-1 text-xs text-slate-500">
              <span class="inline-flex items-center gap-1 font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                <span class="material-symbols-outlined text-[13px]">verified</span>
                ${meta.citation}
              </span>
              ${meta.docKey ? `
                <button type="button" onclick="openDocPreview('${meta.docKey}', '${meta.docSection}')" class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 px-2 py-0.5 rounded-full border border-amber-300 transition-colors">
                  <span class="material-symbols-outlined text-[13px]">find_in_page</span>
                  <span>Xem trích dẫn bôi vàng</span>
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
      `;
    } else {
      msgWrapper.innerHTML = `
        <div class="flex flex-col items-end gap-1 max-w-xl">
          <div class="bg-blue-800 text-white rounded-2xl p-3.5 shadow-xs text-xs sm:text-sm leading-relaxed chat-bubble-user">
            ${htmlContent}
          </div>
          <span class="text-[11px] text-slate-400 px-1">Vừa xong</span>
        </div>
        <div class="w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 text-xs font-bold">
          SV
        </div>
      `;
    }

    chatMessages.appendChild(msgWrapper);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleSendQuery(queryText) {
    if (!queryText || !queryText.trim()) return;
    const text = queryText.trim();
    if (chatInput) chatInput.value = '';

    appendMessage('user', text);

    const typingEl = document.createElement('div');
    typingEl.className = 'flex gap-3 justify-start items-center text-xs text-slate-500 py-1 pl-11';
    typingEl.innerHTML = `
      <div class="flex items-center gap-1.5 bg-slate-100 px-3 py-1.5 rounded-full text-slate-600">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-800 animate-pulse"></span>
        <span>DUT AI đang tra cứu văn bản quy chế QĐ 1414/QĐ-ĐHBK...</span>
      </div>
    `;
    chatMessages.appendChild(typingEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      typingEl.remove();

      const lower = text.toLowerCase();
      const matched = dutKnowledgeBase.find(kb => kb.keywords.some(kw => lower.includes(kw)));

      if (matched) {
        appendMessage('ai', matched.content, { 
          citation: matched.citation, 
          docKey: matched.docKey,
          docSection: matched.docSection
        });
      } else {
        appendMessage('ai', `Về câu hỏi: "<em>${text}</em>", tôi đã đối soát trên hệ thống Văn bản Pháp quy Trường ĐH Bách khoa - ĐHĐN nhưng chưa có quy định chi tiết trực tiếp.<br/><br/>Bạn vui lòng tra cứu thêm tại <a href="https://dut.udn.vn/VanBanPhapQuy/page/1" target="_blank" class="text-blue-800 underline font-semibold">dut.udn.vn/VanBanPhapQuy</a> hoặc liên hệ <strong>Phòng CTSV ĐHBK Đà Nẵng</strong> qua hotline <strong>(0236) 3737084</strong>.`);
      }
    }, 500);
  }

  if (sendBtn) {
    sendBtn.addEventListener('click', () => {
      if (chatInput) handleSendQuery(chatInput.value);
    });
  }

  if (chatInput) {
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendQuery(chatInput.value);
      }
    });
  }

  promptPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const promptText = pill.getAttribute('data-prompt') || pill.textContent.trim();
      handleSendQuery(promptText);
    });
  });

  if (clearChatBtn && chatMessages) {
    clearChatBtn.addEventListener('click', () => {
      chatMessages.innerHTML = `
        <div class="flex gap-3 justify-start animate-fade-in">
          <div class="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
            DUT
          </div>
          <div class="flex flex-col gap-1.5 max-w-2xl">
            <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs text-slate-800 text-xs sm:text-sm leading-relaxed chat-bubble-ai">
              Xin chào bạn <strong>Nguyễn Văn A (Lớp 23T_DT1)</strong>! Tôi là Trợ lý Học vụ của <strong>Trường Đại học Bách khoa - Đại học Đà Nẵng</strong>.<br/><br/>
              Mọi câu trả lời của tôi đều được trích xuất trực tiếp từ <strong>Quyết định 1414/QĐ-ĐHBK</strong> và văn bản pháp quy hiện hành của Nhà trường. Bạn có thể chọn câu hỏi mẫu hoặc nhập nội dung cần giải đáp!
            </div>
            <div class="flex items-center gap-2 px-1 text-xs text-slate-500">
              <span class="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                QĐ 1414/QĐ-ĐHBK & dut.udn.vn
              </span>
            </div>
          </div>
        </div>
      `;
      showToast('Đã làm mới phiên hỏi đáp học vụ DUT.', 'DUT AI');
    });
  }
}

// ==================== SCREEN 4: CALENDAR & NOTIFICATIONS ====================
function initCalendarAndNotifications() {
  const saveNotifBtn = document.getElementById('btnSaveNotifSettings');
  const toggleSwitches = document.querySelectorAll('.setting-toggle-btn');
  const calFilterBtns = document.querySelectorAll('.cal-filter-btn');
  const calEvents = document.querySelectorAll('.cal-event-card');

  toggleSwitches.forEach(btn => {
    btn.addEventListener('click', () => {
      const isChecked = btn.getAttribute('aria-checked') === 'true';
      const newState = !isChecked;
      btn.setAttribute('aria-checked', String(newState));
      
      const knob = btn.querySelector('.toggle-knob');
      if (newState) {
        btn.classList.remove('bg-slate-300');
        btn.classList.add('bg-blue-800');
        if (knob) knob.classList.add('translate-x-5');
      } else {
        btn.classList.remove('bg-blue-800');
        btn.classList.add('bg-slate-300');
        if (knob) knob.classList.remove('translate-x-5');
      }
    });
  });

  if (saveNotifBtn) {
    saveNotifBtn.addEventListener('click', () => {
      showToast('Cài đặt thông báo đã được lưu thành công vào hồ sơ sinh viên DUT (23T_DT1)!', 'Đã lưu cấu hình');
    });
  }

  calFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      calFilterBtns.forEach(b => {
        b.classList.remove('bg-blue-800', 'text-white');
        b.classList.add('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      });
      btn.classList.remove('bg-white', 'text-slate-700', 'hover:bg-slate-100');
      btn.classList.add('bg-blue-800', 'text-white');

      const filterCat = btn.getAttribute('data-cal-filter');
      calEvents.forEach(evt => {
        const cat = evt.getAttribute('data-cal-cat');
        if (filterCat === 'all' || cat === filterCat) {
          evt.style.display = '';
        } else {
          evt.style.display = 'none';
        }
      });
    });
  });
}

// Master Initialization
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-target-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target-tab');
      if (target) switchTab(target);
    });
  });

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash) switchTab(hash, false);
  });

  const initialHash = window.location.hash.replace('#', '');
  if (initialHash && ['catalog', 'procedure', 'assistant', 'calendar'].includes(initialHash)) {
    switchTab(initialHash, false);
  } else {
    switchTab('catalog', false);
  }

  initCatalogFilters();
  initProcedureInteractions();
  initAIAssistant();
  initCalendarAndNotifications();

  // Close preview modal on backdrop click or close button
  const closeBtn = document.getElementById('previewModalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeDocPreview);
});

$total_amp_count = 0

[:documents, :pages].each do |owner|
  Jekyll::Hooks.register owner, :post_render do |doc|
    next unless doc.output_ext == ".html" && doc.output

    next unless doc.output.include?('music.163.com/outchain/player')

    doc.output.gsub!(/<iframe[^>]*?music\.163\.com\/outchain\/player[^>]*?>/i) do |iframe|
      iframe.gsub('&amp;') { $total_amp_count += 1; '&' }
    end
  end
end

Jekyll::Hooks.register :site, :post_write do
  Jekyll.logger.info "Fix-Iframe:", "共修复了 #{$total_amp_count} 个网易云音乐iframe"
end
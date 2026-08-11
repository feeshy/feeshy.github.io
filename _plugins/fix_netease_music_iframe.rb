$total_amp_count = 0

[:posts, :pages, :documents].each do |owner|
  Jekyll::Hooks.register owner, :post_render do |doc|
    next unless doc.output_ext == ".html" && doc.output

    doc.output.gsub!(/<iframe[\s\S]*?music\.163\.com[\s\S]*?>/i) do |iframe|
      iframe.gsub('&amp;') { $total_amp_count += 1; '&' }
    end
  end
end

Jekyll::Hooks.register :site, :post_write do
  Jekyll.logger.info "Fix-Iframe:", "共修复了 #{$total_amp_count} 个网易云音乐iframe"
end

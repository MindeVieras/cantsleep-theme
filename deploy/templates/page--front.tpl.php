  <div class="starfield" style="width:100%;height:100%"></div>
  <?php if ($messages): ?>
    <div id="messages"><div class="section clearfix">
      <?php print $messages; ?>
    </div></div> <!-- /.section, /#messages -->
  <?php endif; ?>
  
  	<?php if (!empty($primary_nav)): ?>
		<?php print render($primary_nav) ?>
	<?php endif ?>
    
	<div class="container">
        <?php if ($page['main']): ?>
            <?php print render($page['main']); ?>
        <?php endif; ?>
    </div>
	
	
